

var imageCount = 1;

function printTime(){

	var d = new Date();
	var years=d.getFullYear();
	var months=d.getMonth();
	var days=d.getDate();
	var hours=d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	document.getElementById("date").innerHTML = months + " - " + days + " - "  
	+ years + " ---- " + hours + ":" + mins + "."+ secs;
	console.log(years);


	var urlString = 'url(images/circuit' + imageCount + '.png)';

	document.getElementById("myImage").style.backgroundImage= urlString;



	if(imageCount > 2){
		imageCount = 0;
	}

	imageCount = imageCount + 1;
	
}

setInterval(printTime, 1000);
