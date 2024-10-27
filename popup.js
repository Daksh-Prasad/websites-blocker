// Add event listener to block a new site
document.getElementById("blockSite").addEventListener("click", () => {
    const siteInput = document.getElementById("siteInput");
    const site = siteInput.value.trim();
  
    if (site) {
      chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
        if (!blockedSites.includes(site)) {
          blockedSites.push(site);
          chrome.storage.sync.set({ blockedSites }, updateBlockList);
          chrome.runtime.sendMessage({ action: "updateBlockedSites", blockedSites });
        }
      });
      siteInput.value = "";
    }
  });
  
  // Function to update the displayed block list and add unblock buttons
  function updateBlockList() {
    chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
      const blockListDiv = document.getElementById("blockList");
      blockListDiv.innerHTML = ""; // Clear current list
  
      blockedSites.forEach((site) => {
        const siteElement = document.createElement("div");
        siteElement.className = "site-item";
  
        const siteText = document.createElement("span");
        siteText.textContent = site;
  
        const unblockButton = document.createElement("button");
        unblockButton.textContent = "Unblock";
        unblockButton.className = "unblock-btn";
        unblockButton.addEventListener("click", () => unblockSite(site));
  
        siteElement.appendChild(siteText);
        siteElement.appendChild(unblockButton);
        blockListDiv.appendChild(siteElement);
      });
    });
  }
  
  // Function to unblock a site by removing it from the list
  function unblockSite(site) {
    chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
      const updatedSites = blockedSites.filter((blockedSite) => blockedSite !== site);
      chrome.storage.sync.set({ blockedSites: updatedSites }, updateBlockList);
      chrome.runtime.sendMessage({ action: "updateBlockedSites", blockedSites: updatedSites });
    });
  }
  
  // Initial call to populate the block list
  updateBlockList();

// Made by Daksh Prasad - https://github.com/Daksh-Prasad