let drawingSquare;
let yarnWeight

//begins the drawing
function setup() {
	createCanvas(windowWidth,windowHeight);
	noStroke();
	resetSketch();
	rectMode(CENTER);

	// determines if the screen is landscape or portrait
	if (windowHeight > windowWidth) {
		drawingSquare = windowWidth;
	}
	else{
		drawingSquare = windowHeight;
	}

	//bases the width of each stitch on the size of the window
	yarnWeight = drawingSquare/40;

}

//this is the main function of this program
function draw () {

	//main square
	fill(255);
	rect(windowWidth/2, windowHeight/2, drawingSquare*0.9, drawingSquare*0.9);

}

function resetSketch() { // builds the environment from scratch 

	//background
	fill(100);
	rect(0,0,windowWidth,windowHeight);

}
