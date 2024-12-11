document.addEventListener('DOMContentLoaded', function() {
  // buttons for extension on/off state
  const extIcon = document.querySelector('.ext-icon');
  const extOffButton = document.getElementById('ext-off');
  const extOnButton = document.getElementById('ext-on');
  const extStatus = document.querySelector('.ext-status');

  // buttons for extension light/dark/system mode
  const modeLightButton = document.getElementById('mode-light');
  const modeDarkButton = document.getElementById('mode-dark');
  const modeSystemButton = document.getElementById('mode-system');
  const modeStatus = document.querySelector('.mode-status');

  // let extEnabled = true;
  // let modeSelected = 'light';

  // Load the initial values from storage
  chrome.storage.sync.get(['extEnabled', 'modeSelected'], function(result) {
    extEnabled = result.extEnabled ?? extEnabled;
    modeSelected = result.modeSelected ?? modeSelected;
    updateExtUI(extEnabled, modeSelected);
  });

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'sync') {
      if ('extEnabled' in changes) {
        extEnabled = changes.extEnabled.newValue;
        updateExtUI(extEnabled, modeSelected);
      }

      if (extEnabled && 'modeSelected' in changes) {
        modeSelected = changes.modeSelected.newValue;
        updateExtUI(extEnabled, modeSelected);
      }
    }
  });

  function updateExtUI(extEnabled, modeSelected) {
    // update extension on/off buttons
    if (extEnabled) {
      extOffButton.classList.remove('ext-active');
      extOnButton.classList.add('ext-active');
      extStatus.textContent = 'Extension is enabled.';
      extIcon.style.filter = "grayscale(0)";

      modeLightButton.style.display = 'block';
      modeDarkButton.style.display = 'block';
      modeSystemButton.style.display = 'block';
      modeStatus.style.display = 'block';
    } else {
      extOnButton.classList.remove('ext-active');
      extOffButton.classList.add('ext-active');
      extStatus.textContent = 'Extension is disabled.';
      extIcon.style.filter = "grayscale(1)";

      modeLightButton.style.display = 'none';
      modeDarkButton.style.display = 'none';
      modeSystemButton.style.display = 'none';
      modeStatus.style.display = 'none';

      // always set modeSelected to 'light' when extension is turned off
      modeSelected = 'light';
    }

    // update mode buttons
    modeLightButton.classList.remove('mode-active');
    modeDarkButton.classList.remove('mode-active');
    modeSystemButton.classList.remove('mode-active');

    if (modeSelected === 'light') {
      modeLightButton.classList.add('mode-active');
      modeStatus.textContent = 'Theme';
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (modeSelected === 'dark') {
      modeDarkButton.classList.add('mode-active');
      modeStatus.textContent = 'Theme';
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (modeSelected === 'system') {
      modeSystemButton.classList.add('mode-active');
      modeStatus.textContent = 'Theme';

      // darken popup based on system color scheme
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }

  // updates popup when system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (extEnabled && modeSelected === 'system') {
      if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  });

  // button click event handlers
  extOffButton.addEventListener('click', function() {
    chrome.storage.sync.set({ extEnabled: false });
  });
  
  extOnButton.addEventListener('click', function() {
    chrome.storage.sync.set({ extEnabled: true });
  });

  modeLightButton.addEventListener('click', function() {
    chrome.storage.sync.set({ modeSelected: 'light' });
  });

  modeDarkButton.addEventListener('click', function() {
    chrome.storage.sync.set({ modeSelected: 'dark' });
  });

  modeSystemButton.addEventListener('click', function() {
    chrome.storage.sync.set({ modeSelected: 'system' });
  });
});
