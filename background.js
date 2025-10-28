let blockedSources = [];

// Load from storage
chrome.storage.sync.get("blockedSources", (data) => {
  blockedSources = data.blockedSources || [];
});

// Update if changed
chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedSources) {
    blockedSources = changes.blockedSources.newValue || [];
  }
});

/**
 * 1️⃣ Block new tabs opened by blocked sources
 */
chrome.tabs.onCreated.addListener(async (newTab) => {
  if (newTab.openerTabId) {
    try {
      const openerTab = await chrome.tabs.get(newTab.openerTabId);
      if (openerTab.url && blockedSources.some(src => openerTab.url.includes(src))) {
        console.log(`Blocked new tab opened by: ${openerTab.url}`);
        chrome.tabs.remove(newTab.id);
      }
    } catch (err) {
      console.warn("Error reading opener tab:", err);
    }
  }
});

/**
 * 2️⃣ Handle icon click — toggle current site's domain in blockedSources
 */
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url) return;

  try {
    const url = new URL(tab.url);
    const domain = url.hostname.replace(/^www\./, "");
    const index = blockedSources.indexOf(domain);

    if (index === -1) {
      // Add domain to block list
      blockedSources.push(domain);
      await chrome.storage.sync.set({ blockedSources });
      console.log(`✅ Added ${domain} to blocked list`);

      chrome.action.setBadgeText({ text: "ON", tabId: tab.id });
      chrome.action.setBadgeBackgroundColor({ color: "#4CAF50" });
    } else {
      // Remove domain from block list
      blockedSources.splice(index, 1);
      await chrome.storage.sync.set({ blockedSources });
      console.log(`❌ Removed ${domain} from blocked list`);

      chrome.action.setBadgeText({ text: "OFF", tabId: tab.id });
      chrome.action.setBadgeBackgroundColor({ color: "#F44336" });
      setTimeout(() => chrome.action.setBadgeText({ text: "", tabId: tab.id }), 2000);
    }

    // Reset badge after a short delay (optional)
    // setTimeout(() => chrome.action.setBadgeText({ text: "", tabId: tab.id }), 2000);
  } catch (e) {
    console.error("Invalid URL:", e);
  }
});
