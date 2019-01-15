function newGoal(numGoals) {
	numGoals += 1;

	var newGoal = document.getElementById('goal0').cloneNode(true);
	newGoal.setAttribute('id', 'goal' + String(numGoals));
	newGoal.style.display = 'block';
	document.getElementById('goalList').appendChild(newGoal);
	document.getElementById('goalList').appendChild(document.createElement('br'));

	return numGoals
}

function deleteGoal(goalElement) {
	if (confirm('Delete Goal?')) {
		goalElement.parentNode.removeChild(goalElement);
	}
}