# 🧩 New Tab Blocker

**Stop annoying ad sites from opening new tabs automatically.**  
Clean, distraction-free browsing made simple.  

[![Available in the Chrome Web Store](https://img.shields.io/badge/Available%20on-Chrome%20Web%20Store-brightgreen?logo=google-chrome)](https://chrome.google.com/webstore/detail/)  
*(Link will be active once approved)*

---

## 🚀 Overview

**New Tab Blocker** is a lightweight Chrome extension that lets you take back control of your browser.  
It blocks specific websites from opening new tabs — perfect for shutting down ad-heavy or clickbait sites that keep hijacking your browsing flow.

You decide which sites to block.  
Click the extension icon once to block the current site from opening new tabs, click again to unblock it.

---

## ✨ Features

- 🧱 **One-click blocking:** Toggle any site directly from the extension icon.  
- 🚫 **Automatic tab closing:** Stops blocked domains from opening new tabs.  
- 💾 **Persistent storage:** Your blocked list is saved with `chrome.storage.sync`.  
- ⚙️ **Easy management:** Add or remove sites anytime from the Options page.  
- 🔒 **Privacy-friendly:** No data collection, tracking, or remote code.

---

## 🧠 How It Works

1. Install the extension from the Chrome Web Store.  
2. When you’re on a site that keeps opening tabs (e.g., spammy ads), **click the extension icon** — it’ll show `ON`.  
3. That site can no longer open new tabs.  
4. Click again to toggle `OFF` if you want to allow it again.  
5. Manage all blocked sites from the Options page.

---

## 🔒 Permissions Explained

| Permission | Purpose |
|-------------|----------|
| **tabs** | Detect new tabs being opened and identify their opener site |
| **storage** | Save the user’s blocked website list |
| **webNavigation** | Check navigation events triggered by blocked sites |
| **host_permissions** | Allow operation across all sites (no data access or modification) |

---

## 🧾 Privacy Policy

This extension does **not collect, store, or transmit any personal data.**  
All data stays local to your browser and synced securely using Chrome’s built-in APIs.  

🔗 **Privacy Policy:** [View here]()

---

## 🛠️ Local Development

To test or modify the extension:

1. Clone this repository:
   ```bash
   git clone https://github.com/anshulsharma1610/Tab-Blocker.git
