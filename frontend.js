function newGoal() {
	var newGoal = document.getElementById('goalTemplate').cloneNode(true);
	newGoal.style.display = 'block';
	document.getElementById('goalList').appendChild(newGoal);
	document.getElementById('goalList').appendChild(document.createElement('br'));
}

function deleteGoal(goalElement) {
	if (confirm('Delete Goal?')) {
		let nearbyBr = goalElement.nextSibling;
		goalElement.parentNode.removeChild(nearbyBr);
		goalElement.parentNode.removeChild(goalElement);
		uploadData();
	}
}

function newEvent(goalElement) {
	var eventList = goalElement.lastElementChild.previousElementSibling;
	var newEvent = document.getElementById('eventReference').cloneNode(true);
	newEvent.style.display = 'block';
	eventList.appendChild(newEvent)
}

function deleteEvent(eventElement) {
	eventElement.parentNode.removeChild(eventElement);
	uploadData();
}