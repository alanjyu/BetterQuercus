let extEnabled = false;
let modeSelected = 'light';
const activeTabs = new Set();

const contentScript = {
    id: 'contentScript',
    css: ['css/main.css'],
    js: ['js/content.js'],
    persistAcrossSessions: false,
    allFrames: true,
    matches: [ 'https://q.utoronto.ca/*' ],
    runAt: "document_start",
    world: "MAIN"
  }

function updateContent(extEnabled, modeSelected) {
  if (extEnabled) {
    chrome.scripting.registerContentScripts([contentScript]);
  } else {
    chrome.scripting.unregisterContentScripts();
  }
}

chrome.storage.sync.get(['extEnabled', 'modeSelected'], function(result) {
  extEnabled = result.extEnabled ?? extEnabled;
  modeSelected = result.modeSelected ?? modeSelected;
  updateContent(extEnabled, modeSelected);
});

chrome.storage.onChanged.addListener(function(changes) {
  if ('extEnabled' in changes) {
    extEnabled = changes.extEnabled?.newValue ?? extEnabled;
    updateContent(extEnabled, modeSelected);
  } else if ('modeSelected' in changes) {
    modeSelected = changes.modeSelected?.newValue ?? modeSelected;
    updateContent(extEnabled, modeSelected);
  }
});