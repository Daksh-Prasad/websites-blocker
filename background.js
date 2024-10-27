// Initialize blocked sites from storage and set up rules initially
chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
    updateBlockedSites(blockedSites);
  });
  
  // Listen for messages to update blocked sites
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "updateBlockedSites") {
      updateBlockedSites(request.blockedSites);
    }
  });
  
  // Function to update blocked sites with unique rule management
  function updateBlockedSites(sites) {
    // First, remove any existing rule with ID 1
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1]
    }, () => {
      // After removing, add the new rule only if there are sites to block
      if (sites.length > 0) {
        chrome.declarativeNetRequest.updateDynamicRules({
          addRules: [
            {
              id: 1, // Use ID 1 consistently
              priority: 1,
              action: { type: "block" }, // redirect: { url: "https://www.google.com" } }, REMOVE THE // AND CHANGE THE URL IF YOU WANT TO REDIRECT TO A SPECIFIC WEBSITE
              condition: {
                urlFilter: sites.join("|"),
                resourceTypes: ["main_frame"]
              }
            }
          ]
        });
      }
    });
  } 

// Initialize blocked sites from storage and set up rules initially
chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
    updateBlockedSites(blockedSites);
  });
  
  // Listen for messages to update blocked sites
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "updateBlockedSites") {
      updateBlockedSites(request.blockedSites);
    }
  });
  
  // Function to update blocked sites with unique rule management
  function updateBlockedSites(sites) {
    // First, remove any existing rule with ID 1
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1]
    }, () => {
      // After removing, add the new rule only if there are sites to block
      if (sites.length > 0) {
        chrome.declarativeNetRequest.updateDynamicRules({
          addRules: [
            {
              id: 1, // Use ID 1 consistently
              priority: 1,
              action: { type: "redirect", redirect: { url: "https://www.google.com" } },
              condition: {
                urlFilter: sites.join("|"),
                resourceTypes: ["main_frame"]
              }
            }
          ]
        });
      }
    });
  }

// Made by Daksh Prasad - https://github.com/Daksh-Prasad