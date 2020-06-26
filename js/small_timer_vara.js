//TASK 0.5 #6
function createSmallTimer()
{
	let smallTimerDiv = document.createElement('div');
	smallTimerDiv.className = "popup_thing timer_thing";
	smallTimerDiv.id = "smallTimer";

	smallTimerDiv.innerHTML = "Timp ramas pana la finalul verii = ";

	document.body.appendChild(smallTimerDiv);
}
function updateTimerText()
{
	smallTimerDiv = document.getElementById('smallTimer');
	var currentDate = new Date();
	var timeLeft = -(currentDate - new Date('2020/08/31 23:59:59'));
	if(smallTimerDiv !== null)
		smallTimerDiv.innerHTML = "Timp ramas pana la finalul verii = " + msToTime(timeLeft) + " ore";
	setTimeout(() => {
		updateTimerText();
	}, 1000);
}

createSmallTimer();
updateTimerText();