chrome.contextMenus.create({
    "title" : "context word",
    "type"  : "normal",
    "contexts" : [],
	"onclick": function(info) {
		chrome.tabs.getSelected(null, function(tab) {
			
		});
	}
  });

console.log("Background activate");