chrome.action.onClicked.addListener((tab) => {
  let currentState;
  chrome.storage.local.get(['enabled'], function ({ enabled: enabled }) {
    console.log('Value currently is ' + enabled);
    currentState = enabled ?? false;
    console.log("Toggle dark mode")
    chrome.storage.local.set({ enabled: !enabled });
  });

});