chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['enabled'], function ({ enabled: enabled }) {
    console.log('Value currently is ' + enabled);

    chrome.storage.local.set({ enabled: !enabled });
  });
});
