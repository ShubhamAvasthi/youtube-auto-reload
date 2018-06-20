browser.browserAction.onClicked.addListener(function(){
	//browser.notifications.create({"type": "basic", "message": "Auto-reload On", "title": "Youtube Auto-Reload"});
	browser.tabs.executeScript({file: "auto-reload.js"});
	});

browser.runtime.onMessage.addListener( function notify(message) {
  console.log("Background script received a message.");
  if(message.status=="on")
	  browser.notifications.create("auto-reload-notification", {
	    "type": "basic",
	    "message": "Auto-reload On",
	    "title": "Youtube Auto-Reload"
	  });
  else if(message.status=="off")
	  browser.notifications.create("auto-reload-notification", {
	    "type": "basic",
	    "message": "Auto-reload Off",
	    "title": "Youtube Auto-Reload"
	  });
});