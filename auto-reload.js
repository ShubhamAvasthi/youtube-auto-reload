if(!window.activated){
	window.activated=true;
	var rep_button=document.getElementsByClassName("ytp-play-button")[0];
	var rep_action=setInterval(function(){
		if(rep_button.title=="Replay")	
			rep_button.click();
	},1500);
	browser.runtime.sendMessage({"status": "on"});
}
else{
	window.activated=false;
	clearInterval(rep_action);
	browser.runtime.sendMessage({"status": "off"});
}
