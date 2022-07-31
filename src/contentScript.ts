// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

function run() {
  if (document.getElementById('brave_speedreader_style')) {
    console.log('Speed Reader');

    const darkStyles = `
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

    // Create the <style> tag
    const style = document.createElement("style");
    style.id = "dark-mode";
    style.appendChild(document.createTextNode(darkStyles));

    // Add the <style> element to the page
    document.head.appendChild(style);
  }
}

run();
