//TODO do this every 30 secs and onquit
function uploadData() {
	gatherData()
	//TODO send data here
}

function gatherData() {
	goalData = []
	goals = document.getElementById('goalList').children;
	for (var x = 0; x < goals.length; x++) {
		goalData.push(1);
	}
}

//MAYBE download?