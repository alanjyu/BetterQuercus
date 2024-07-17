let extEnabled = false;
let modeSelected = 'light';
let systemIsDark = window.matchMedia('(prefers-color-scheme: dark)');
const activeTabs = new Set();

let contentScript = {
    id: 'inject_content',
    css: ['css/static.css'],
    js: ['js/content.js'],
    matches: [ 'https://q.utoronto.ca/*' ],
    allFrames: true,
    persistAcrossSessions: false,
    runAt: "document_start",
    world: "MAIN"
  }

async function updateContentScripts(extEnabled, modeSelected) {
  if (extEnabled) {
    await chrome.scripting.registerContentScripts([contentScript]);
  } else {
    await chrome.scripting.unregisterContentScripts();
  }
}

async function injectContentScript(tabId, extEnabled, modeSelected) {
  if (extEnabled) {
      await chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: () => {

        },
      });
    } else if (modeSelected === 'dark') {
      await chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: () => {
        },
      });
    }
  }
}

chrome.storage.sync.get(['extEnabled', 'modeSelected'], function(result) {
  extEnabled = result.extEnabled ?? extEnabled;
  modeSelected = result.modeSelected ?? modeSelected;
  updateContentScripts(extEnabled, modeSelected);
});

chrome.storage.onChanged.addListener(function(changes) {
  if ('extEnabled' in changes) {
    extEnabled = changes.extEnabled.newValue;
    updateContentScripts(extEnabled, modeSelected);
  }

  if (extEnabled && 'modeSelected' in changes) {
    modeSelected = changes.modeSelected.newValue;
    updateContentScripts(extEnabled, modeSelected);
  }
});


chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url && tab.url.startsWith('https://q.utoronto.ca/')) {
    activeTabs.add(tab.id);
  }
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  if (activeTabs.has(tabId)) {
    activeTabs.delete(tabId);
  }
});