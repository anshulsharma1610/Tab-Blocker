const input = document.getElementById("urlInput");
const list = document.getElementById("urlList");
const addBtn = document.getElementById("addBtn");

function loadList() {
  chrome.storage.sync.get("blockedSources", (data) => {
    const urls = data.blockedSources || [];
    list.innerHTML = "";
    urls.forEach((url, index) => {
      const li = document.createElement("li");
      li.textContent = url;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Remove";
      delBtn.onclick = () => removeUrl(index);

      li.appendChild(delBtn);
      list.appendChild(li);
    });
  });
}

function addUrl() {
  const url = input.value.trim();
  if (!url) return;

  chrome.storage.sync.get("blockedSources", (data) => {
    const urls = data.blockedSources || [];
    if (!urls.includes(url)) {
      urls.push(url);
      chrome.storage.sync.set({ blockedSources: urls }, loadList);
    }
  });

  input.value = "";
}

function removeUrl(index) {
  chrome.storage.sync.get("blockedSources", (data) => {
    const urls = data.blockedSources || [];
    urls.splice(index, 1);
    chrome.storage.sync.set({ blockedSources: urls }, loadList);
  });
}

addBtn.addEventListener("click", addUrl);
loadList();
