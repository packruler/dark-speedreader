const DARK_STYLES = `
/* Copied from comment in Brave Speedreader CSS style */

@media (prefers-color-scheme: dark) {
  body {
    background-color: #1E2029;
    color: #F0F2FF;
  }

  #article .leading-image, #article figure, #article .auxiliary, #article .pullquote {
    color: #C2C4CF;
  }

  hr {
    background: #3B3E4F;
  }

  blockquote, q {
    color: #C2C4CF;
  }

  blockquote:not(.simple):not(.pullquote) {
    border-left: 3px solid #3B3E4F;
  }

  article table td, article table th {
    padding: 0.25em 0.5em;
    border: 1px solid #3B3E4F;
  }

  article table th {
    background-color: #5E6175;
  }

  #article {
    border-top: 1px solid #3B3E4F;
  }

  #article-summary {
    color: #C2C4CF;
  }

  a[href] {
    color: #737ADE;
  }

  .subhead, .subheading {
    color: #C2C4CF;
  }
}
`;

function setupDarkMode() {
  chrome.storage.local.get(['enabled'], ({ enabled: enabled }) => {
    if (enabled) {
      // Create the <style> tag
      const style = document.createElement("style");
      style.appendChild(document.createTextNode(DARK_STYLES));

      document.head.appendChild(style);
    }
  })
}

function addSettingChangeListener() {
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName == 'local' && changes.enabled !== undefined) {
      window.location.reload();
    }
  })
}

function run() {
  if (document.getElementById('brave_speedreader_style')) {
    setupDarkMode();
    addSettingChangeListener();
  }
}

run();
