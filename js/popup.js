document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('toggleSwitch');

  chrome.storage.sync.get(['globalEnabled'], function(result) {
    let storedState = result.globalEnabled ?? false;
    console.log("Stored state:", storedState);

    updateSwitchState(storedState);

    toggleSwitch.checked = storedState;
    toggleSwitch.addEventListener('change', function() {
      let newState = !storedState;

      chrome.storage.sync.set({ globalEnabled: newState }, function() {
        storedState = newState;
        updateSwitchState(newState);

        chrome.runtime.sendMessage({ action: 'toggleGlobalEnabledState' }, function(response) {
          updateSwitchState(response.globalEnabled);
        });
      });
    });
  });

  function updateSwitchState(isEnabled) {
    toggleSwitch.checked = isEnabled;
  }
});
