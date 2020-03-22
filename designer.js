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

	for (i = 0; i < windowHeight; i = i+stitchCounter) {
		rect(0, 0, yarnWeight, stitchCounter);
		translate(0,stitchCounter);
	}
	// {
	// 	translate(yarnWeight, -1 * stitchCounter);
	// 	rect(0, 0, yarnWeight, stitchCounter);
	// }

	// for (i = 0; i < windowHeight; i = i + yarnWeight*4) {
	// 	if (i < windowHeight) {
	// 		rect(0, 0+i, yarnWeight, yarnWeight*4);
	// 	}
	// 	if (i > windowHeight) {
	// 		translate(yarnWeight, -1 * windowHeight);
	// 	}
	// }

}

function resetSketch() { // builds the environment from scratch 

	//background
	fill(100);
	rect(0,0,windowWidth,windowHeight);

}
