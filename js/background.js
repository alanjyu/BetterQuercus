let globalEnabled = true; // Set the initial default state to true

function updateContentInjection(tabId, isEnabled) {
  if (isEnabled) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['js/content.js']
    });

    chrome.scripting.insertCSS({
      target: { tabId },
      files: ['css/main.css']
    });
  } else {
    chrome.scripting.removeCSS({
      target: { tabId },
      files: ['css/main.css']
    });
  }
}

function performInjectionIfNeeded() {
  console.log('injecting!')
  chrome.tabs.query({ url: "https://q.utoronto.ca/*" }, function(tabs) {
    for (const tab of tabs) {
      updateContentInjection(tab.id, globalEnabled);
    }
  });
}

chrome.storage.sync.get(['globalEnabled'], function(result) {
  if (result.hasOwnProperty('globalEnabled')) {
    globalEnabled = result.globalEnabled; // Use the stored value if available
  }

  // Perform the initial injection
  performInjectionIfNeeded();

  // Listen to tab updates (including page refresh)
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (globalEnabled && changeInfo.status === 'complete') {
      updateContentInjection(tabId, globalEnabled);
    }
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getGlobalEnabledState') {
      console.log("Received getGlobalEnabledState message");
      sendResponse({ globalEnabled });
    } else if (message.action === 'toggleGlobalEnabledState') {
      console.log("Received toggleGlobalEnabledState message");
      globalEnabled = !globalEnabled;

      performInjectionIfNeeded(); // Call the injection function based on the new state

      sendResponse({ globalEnabled });
    }
  });
});
