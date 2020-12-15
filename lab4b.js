//global variables

// x and y position of the buildings, used to draw them in the right location
var xPosition=0;
var yPosition;
// colors for bulidng and window - to be randomly assigned
var buildColor;
var windowColor;

var xContinue=0; // used to increment xPosition depending on the random width of a bulding
var windowSize =20;


function setup() {
	createCanvas(400,400);
	noLoop();
}

// function returns a color
function getRandomColor(){
	// temp. variables used to assign random rgb values
	var rtemp = random(0,255);
	var gtemp = random(0,255);
	var btemp = random(0,255);
	var tempColor = color(rtemp,gtemp,btemp);
	return tempColor;
}

// gives a random integer(no decimals) between a min and max
// function returns a number
function getRandomInt(min, max) {
    min = ceil(min);
    max = floor(max);
    return floor(random() * (max - min + 1)) + min;
}

// calculating the number of windows needed in a row or colum depending on the space avalaible
// fucntion returns a number
function calcWindow(x){
 var temp = x;
  temp = temp*.75; 
  temp = floor(temp/windowSize);
  return temp;
}

// calculating the space between each window based on the total space and the amount of windows
// function returns a number
function calcSpacing(total,amount){
 var temp = total - (windowSize*amount);
 temp = temp/(amount+1);
 return temp;
}

// draws a building with windows - each building is a random height and width between certain values
function makeBuildzz(){
	push();
		fill(getRandomColor()); // gets random color of the building
		strokeWeight(3);
		var xtemp = 20*getRandomInt(1,8); 			// random width of the building, given in random intervals of 20 
		var ytemp = 50*getRandomInt(2,6); 			// randon height of the building, given in random intervals of 50
		var xWindow = calcWindow(xtemp); 			// windows needed in x direction
		var yWindow = calcWindow(ytemp); 			// windows needed in y direciton
		var xSpacing = calcSpacing(xtemp,xWindow);  // spacing between x direction windows
		var ySpacing = calcSpacing(ytemp,yWindow);  // spacing between y direction windows

		// a check to make sure the the random width of the building fits into the canvas
		if(xtemp<=width-xPosition){
			rect(xPosition,height-ytemp,xtemp,ytemp);	
					strokeWeight(2);		
					/* nested for loops used to create windows in both x and y direction
					draws a full colum before moving onto the next one                */
					for(var hold =1; hold<=xWindow; hold++){

						fill(230,210,200); 												// slightly tinted orange to reflect the morning scene
						var count = xPosition+ (hold*xSpacing)+(windowSize*(hold-1));   // calculates the x position of the window 

							for(var make =0; make<yWindow;make++){
								var yheight = 400-((ySpacing*make)+(windowSize*make));  // calculates the y position of the window 
								rect(count,yheight,windowSize,windowSize);
							}
					}

			xPosition+= xtemp;		 // updates xPosition so the next building draws right next to each other
			xContinue = xtemp; 		// updates so the foor loop increments correctly
		}
		else{
			xContinue=0; 			// makes xContinue 0 so it doesn't increment if a building isn't made
		}
	pop();
}

// make the sun in the background
function makebackSun(){
	push();
		noStroke();
		background(250,180,120);
		fill(230,90,40);
		ellipse(50,50,150,150);
	pop();
}


function draw() {
	makebackSun();
	// runs the forloop for an x amount of loops, depending on the random widths of each building created
	for(var holdX=xPosition ; holdX < width; holdX+=xContinue){
		makeBuildzz();
	}
}


