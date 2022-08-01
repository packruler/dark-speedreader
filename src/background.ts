const darkIconPath = 'icons/icon_dark_16.png';
const lightIconPath = 'icons/icon_light_16.png';

function updateAction(enabled: boolean) {
  chrome.action.setIcon({ path: enabled ? darkIconPath : lightIconPath });
  chrome.action.setTitle({ title: enabled ? 'Disable Dark Mode' : 'Enable Dark Mode' });
}

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get(['enabled'], function ({ enabled: enabled }) {
    enabled = !enabled;

    chrome.storage.local.set({ enabled: enabled });

    updateAction(enabled);
  });
});

chrome.storage.local.get(['enabled'], ({ enabled: enabled }) => {
  updateAction(enabled);
});
