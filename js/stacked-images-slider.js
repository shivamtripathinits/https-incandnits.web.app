var start = 0;
var itr;

var stackedImagesSlider = document.getElementById('stacked-images-slider');
var maxWidth;
var stackedImages = document.getElementsByClassName('stacked-image');
var containers = document.getElementsByClassName('container');
var stackedImagesLength = stackedImages.length;
// var container=document.getElementById('container');
var teamPhoto=document.getElementsByClassName('teamPhoto');

var maxHeight;
var posHeight;

var imageText=document.getElementsByClassName('imageText');

let stop = true;
var stackedImagesSlider = document.getElementById('stacked-images-slider');
// var container=document.getElementById('container');


window.addEventListener('scroll', function(e){
	if(stop){
		window.scrollTo(0,0);
	}
});

// function showHideMembers(team){
	// document.getElementById('container').className = team;
// }

function showHideTeam(team, cName){

	stop = false;

	console.log("showHideTeam: team: "+team+" cName: "+cName);

	for(var k=0; k<imageText.length; k++)
	{
		imageText[k].style.top='92%';
	}

	// for(let i=0; i<stackedImagesLength; i++){

		// containers[i].style.top = '100vh';
	// }

	stackedImagesSlider.style.position='fixed';
	document.getElementById('one').style.height = '20vh';
	document.body.style.paddingTop = "20vh";
	stackedImagesSlider.style.top='-50vh';
	document.getElementById('right-arrow').style.top='50vh';
	document.getElementById('left-arrow').style.top='50vh';
	document.getElementById('left-arrow').style.left='-4vw';
	document.getElementById('right-arrow').style.right='-4vw';

	// showHideMembers(team);

	let position = cName.substr(cName.length-1)-'3';

	console.log("position: "+position);

	start = (start+position)%stackedImagesLength;
	swap();

}

document.getElementById('team1').addEventListener('click', function(){

	showHideTeam('patron', document.getElementById('team1').className);

})

document.getElementById('team2').addEventListener('click', function(){

	showHideTeam('convener', document.getElementById('team2').className);

})
document.getElementById('team3').addEventListener('click', function(){

	showHideTeam('executive', document.getElementById('team3').className);

})

document.getElementById('team4').addEventListener('click', function(){

	showHideTeam('management', document.getElementById('team4').className);

})

document.getElementById('team5').addEventListener('click', function(){

	showHideTeam('infra', document.getElementById('team5').className);

})

document.getElementById('team6').addEventListener('click', function(){

	showHideTeam('web', document.getElementById('team6').className);

})


function swap(){

	if(start < 0){
		start += stackedImagesLength;
	}

	console.log("start: "+ start);

	for(itr = 0; itr < stackedImagesLength; itr++){
		switch (itr){
			case start:{
				stackedImages[itr].className = "stacked-image si1";
				containers[itr].className = "container"
				break;
			}
			case (start+1)%stackedImagesLength:{
				stackedImages[itr].className = "stacked-image si2";
				containers[itr].className = "container"
				break;
			}
			case (start+2)%stackedImagesLength:
			{
				stackedImages[itr].className = "stacked-image si3";
				containers[itr].className = "container visible"
				break;
			}
			case (start+3)%stackedImagesLength:
			{
				stackedImages[itr].className = "stacked-image si4";
				containers[itr].className = "container"
				break;
			}
			case (start+4)%stackedImagesLength:{
				stackedImages[itr].className = "stacked-image si5";
				containers[itr].className = "container"
				break;
			}
			default:{					
				stackedImages[itr].className = "stacked-image si0";
				containers[itr].className = "container"
			}
		}
	}
}

var p;

function previousTeam(){
	start--;
	swap();
}

function nextTeam(){
	start++;
	start %= stackedImagesLength;
	swap();
}

window.addEventListener('keydown', function(e){

	if(e.keyCode == 39){
		previousTeam();
	}else if(e.keyCode == 37){
		nextTeam();
	}
});

document.getElementById('right-arrow').addEventListener('click',function(){
	nextTeam();
});

document.getElementById('left-arrow').addEventListener('click',function(){
	previousTeam();
})

function init(){

	maxWidth = Math.ceil(stackedImagesSlider.offsetWidth * 0.6);
	maxHeight = 0;
	posHeight = 0;
	console.log(maxWidth);		

	for(itr = 0; itr < stackedImagesLength; itr++){
		posHeight = stackedImages[itr].naturalHeight / stackedImages[itr].naturalWidth * maxWidth;
		if(posHeight > maxHeight){
			maxHeight = posHeight;
		}
	}

	swap();
}

window.addEventListener('load', init);
window.addEventListener('resize', init);