// ==UserScript==
// @name     reddit boringifier
// @version  1
// @grant    none
// ==/UserScript==

(function () {
  const host = location.hostname;

  const kill = () => {
    if (host.includes("reddit.com")) {
      [
        "shreddit-gallery-carousel",
        "reddit-header-large",
        "shreddit-async-loader[bundlename='shreddit_sort_dropdown']",
        "shreddit-feed",
        "reddit-sidebar-nav",
        "#right-sidebar-container",
        "aside[aria-label='Popular Communities']",
      ].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
      });
    }

    // alternate reddit frontend (redlib)
    if (host === "redlib.canine.tools") { 
      document.getElementById("posts")?.remove();
    }
  };

  kill();

  new MutationObserver(kill).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
