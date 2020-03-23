let boxWidth = 100;
let boxHeight = 150;
let boxes = [];
let r;


//begins the drawing
function setup() {
	createCanvas(windowWidth,windowHeight);
	noStroke();
	resetSketch();

	for (var a = 0; a < width; a += 50) {
    for (var b = 0; b < height; b += 30) {
      //add the circles to the array at x = a and y = b
      boxes.push(new BoxBitch(a, b));
    }
  }
  console.log(boxes.length);
  console.log(boxes[5]);
}

//this is the main function of this program
function draw () {

	stroke(255);
	fill(255,100,100);

	rect(0,0,boxWidth,boxHeight);

	for (var b = 0; b < boxes.length; b++) {
		boxes[b].show();
	}


}

function BoxBitch(x, y) {
	this.x = x;
	this.y = y;

	this.show = function() {
		fill(100, 255, 255);
		rect(this.x, this.y, 10, 10);
	}
}

function mousePressed(x,y) {
	print(x,y);
}

function changeBlack(r) {
	fill(0);
	rect(boxes[r].x, boxes[r].y, 10, 10);
	print(r);
}

function resetSketch() { // builds the environment from scratch 

	//background
	fill(100);
	rect(0,0,windowWidth,windowHeight);

}
