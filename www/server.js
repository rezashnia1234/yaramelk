$(function(){
	function checkAndSend() {    
		if (!('parentIFrame' in window)) {
			console.log('No parentIFrame object yet...');
			setTimeout(checkAndSend, 16);
		} else {
			var origin = location.pathname;
			//window.parentIFrame.sendMessage(origin);
			parentIFrame.sendMessage("Loading_Completed");
			/*
			setTimeout(function(){
				msg = "eval___alert('ssss');";
				parentIFrame.sendMessage(msg);
			}, 4000);
			*/
			var exitApp = false, intval = setInterval(function (){exitApp = false;}, 1000);
			// document.addEventListener("keydown", function (e){
			document.addEventListener("backbutton", function (e){
				e.preventDefault();
				if (exitApp) {
						//clearInterval(intval) 
						//exitApp = false;
						parentIFrame.sendMessage("Exit_app");
				}
				else {
					exitApp = true;
					history.back(1);
				} 
			}, false);
			
			console.log('found parentIFrame object! Sent message.');
			return false;
		}
	}
	checkAndSend();
});