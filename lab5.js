//global variables
// used to calculate when to flap the wings
var flapUp = false;
var timerz =0; 
// arrrays for each bird
var bird1;
var bird2;
var bird3;
var bird4;
var bird5; 
// arrays for each tree
var tree1;
var tree2;
var tree3;
// array for tree arrays
var masterTree;
// array for bird arrays
var masterBird;

function setup() {
	createCanvas(600,600);
	// bird array in the order 
	//[x location, y location, scale, dx, dy, color,orientation(positive or negative)]
	bird1 = [100,100,0.55,2,-0.4,getRandColor(),1];
	bird2 = [80,440,0.45,1.5,-2.5,getRandColor(),1];
	bird3 = [200,420,0.45,2.5,-0.5,getRandColor(),1];
	bird4 = [450,200,0.5,-3,1.5,getRandColor(),-1];
	bird5 = [500,100,0.5,-1.5,2,getRandColor(),-1];
	// tree array in order [translate x, translate y]
	tree1 = [0,0];
	tree2 = [-225,0];
	tree3 = [-450,0];
	masterTree = [tree1,tree2,tree3];
	masterBird= [bird1,bird2,bird3,bird4,bird5];	
}

function getRandColor(){
	var tempColor = color(random(0,255),random(0,255),random(0,255));
	return tempColor;
}

function drawBackzzzz(){
	push();	
		noStroke();
		background(124,219,235);
		fill(242,215,51); // Yellow
			ellipse(10,10,200,200); // sun
		fill(46,219,26);  //Light Green
			rect(0, 0.8*height, width,0.2*height); // grass ground
		translate(200,160);	
		// accessing the master tree array through a for loop
		for(var hold =0; hold <3;hold++)
		{
			drawTreez(masterTree[hold][0],masterTree[hold][1]);

		}

	pop();
}

function drawTreez(x,y){
	push();
		translate(x,y);
		fill(210,105,30); // Brown
			rect (305,150,50,175,10); // tree trunk
		fill(19,131,22);  // Dark Green    
			// Tree leaves
			ellipse(300,140,120,120);
			ellipse(360,140,120,120);
			ellipse(330,75,120,120);
	pop();
}

function drawBirdz(x,y,scalezz,positionz,colorzz){
	push();
		scale(scalezz);
		translate(x/scalezz,y/scalezz);
			noStroke();
			fill(255,95,10);
			triangle(0,0,50,0,0,20);
			fill(255);
			rect(-20,0,20,80);
			triangle(-20,0,-20,100,-100,100);
			triangle(-20,100,-20,80,0,80);
			fill(colorzz);
			if(!positionz){
				triangle(-20,0,-20,100,-100,100);
			}
			else{
				triangle(-36,20,-100,100,-140,40);

			}
			fill(0);
			rect(-30,100,10,60);
			rect(-50,100,10,60);
			fill(255);
			triangle(-20,80,-20,100,-40,100);
			triangle(-20,0,-20,20,-36,20);
			fill(255,0,0);
			ellipse(-10,5,5);

	pop();
}

// the same bird but its facing left
function drawFlippedBirdz(x,y,scalezz,positionz,colorzz){
	push();
		scale(scalezz);
		translate(x/scalezz,y/scalezz);
			noStroke();
			fill(255,95,10);
			triangle(0,0,-50,0,0,20);
			fill(255);
			rect(0,0,20,80);
			triangle(20,0,20,100,100,100);
			triangle(20,100,20,80,0,80);
			fill(colorzz);
			if(!positionz){
				triangle(20,0,20,100,100,100);
			}
			else{
				triangle(36,20,100,100,140,40);

			}
			fill(0);
			rect(30,100,10,60);
			rect(50,100,10,60);
			fill(255);
			triangle(20,80,20,100,40,100);
			triangle(20,0,20,20,36,20);
			fill(255,0,0);
			ellipse(10,5,5);

	pop();
} 

function drawALLBirdzz(){
	// going through masterbird array to draw them all
		for(var count =0; count<5;count++){
			if(masterBird[count][6]>0){
				drawBirdz(masterBird[count][0],masterBird[count][1],masterBird[count][2],flapUp,masterBird[count][5]);
			}
			else{
				drawFlippedBirdz(masterBird[count][0],masterBird[count][1],masterBird[count][2],flapUp,masterBird[count][5]);
			}

			
		}
}

function updatezzz(){
	// every ten frames, change the oreintation of the wing
	if(timerz%10==0){
		flapUp= !flapUp;
	}
	timerz++;
	// updating the location of the birds
	for(var count =0; count<5;count++){
		masterBird[count][0]+= masterBird[count][3];
		masterBird[count][1]+= masterBird[count][4];
	}
}

function draw() {
	drawBackzzzz();
	drawALLBirdzz();	
	updatezzz();
}


