let yarnWeight;
let stitchCounter;

//begins the drawing
function setup() {
	createCanvas(windowWidth,windowHeight);
	noStroke();
	resetSketch();

	yarnWeight = windowWidth/100;
	stitchCounter = yarnWeight * 4;
}

//this is the main function of this program
function draw () {

	stroke(255);
	fill(255,100,100);

	//this draws the odd columns of stitches
	for (j = 0; j < windowWidth; j = j + yarnWeight*2) {
		for (i = 0; i < windowHeight; i = i+stitchCounter) {
			rect(j, i, yarnWeight, stitchCounter);
		}
	}

	//this draws the even number of stitches
	for (j = yarnWeight; j < windowWidth; j = j + yarnWeight*2) {
		for (i = -.5*stitchCounter; i < windowHeight; i = i+stitchCounter) {
			rect(j, i, yarnWeight, stitchCounter);
		}
	}

}

function resetSketch() { // builds the environment from scratch 

	//background
	fill(100);
	rect(0,0,windowWidth,windowHeight);

}
