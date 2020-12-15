// Click the hand to move the fish
//variables
var scalez=1;
var xDir=400;
var yDir=400;
var fishDropzz=400; // how far down the fish starts
var fishUp = false; // boolean used to check if its the right time to fish

function setup() {
	createCanvas(600,600);
}

//function used for drawing rectangles at specific angles
function drawRotatedRect(rot,x,y,widthzz,heightzz,curvezz)
{
	push();
		translate(x,y);
		rotate(rot);
		rect(0,0,widthzz,heightzz,curvezz);
	pop();
}

//draw a dark blue background with moon in background
function drawBackground(x,y,widthzzz,heightzzz)
{
	push();
		noStroke();
		background(15,0,100); //dark dark blue
		fill(248,207,108);  //yellow
		ellipse(x,y,widthzzz,heightzzz);
		fill(15,0,100);
		ellipse(x+50,y-20,280,280);
	pop();
}

function drawPerson(x,y,scalez)
{
	push();
		noStroke();
		scale(scalez);
		translate(x,y);
		fill(255,255,255);
		ellipse(0,0,30,30); // head
		rect(-18,18,35,60,10);// body
		drawRotatedRect(PI/10,5,20,60,15,10); //hand
		drawRotatedRect(PI/8,0,35,50,15,10); // hand
		drawRotatedRect(-PI/10,-20,70,20,40,10); // thigh
		drawRotatedRect(-PI/4,-5,70,20,40,10); // thigh
		rect(-10,90,20,50,10);  // legs
		rect(18,80,20,50,10);   //legs
	pop();
}

function drawFishRod(x,y,scalez,droplength)
{
	push();
		noStroke();
		fill(255);
		scale(scalez);
		translate(x,y);
		drawRotatedRect(5*PI/4,0,0,10,200,5); //handle
		rect(136,-145,3,droplength,1);        // fishing line
	pop();
}


function drawFish(x,y,scalez)
{
	push();
		noStroke();
		fill(250,150,5); //orange
		scale(scalez);
		translate(x,y);
		ellipse(0,0,60,120);
		triangle(0,50,30,90,-30,90); // tail
		triangle(-25,-20,-25,20,-50,30); // left fin
		triangle(25,-20,25,20,50,30);    // right fin
		fill(0,0,0);                     // black
		ellipse(10,-20,10,10);           // eye
	pop();
}

// drawing stars with an ellipse and 5 triangles
function drawStarz(x,y,scalez)
{
	push();
		noStroke();
		fill(255,255,0);
		scale(scalez);
		translate(x/scalez,y/scalez);
		ellipse(0,0,20,20);
		triangle(-10,-3,0,-30,10,-3);  //top
		triangle(-5,-10,-30,-10,-5,8); //top left
		triangle(5,-10,30,-10,5,8);    // top right
		triangle(-5,-5,-20,25,3,10);   //bottom left
		triangle(5,-10,20,25,-3,10);   // bottom right
	pop();
}

function draw() {// click the hand to fish
	drawBackground(200,250,300,300);
	drawPerson(240,290,1);
	drawFishRod(280,350,1,fishDropzz);
	drawFish(420,fishDropzz+260,1);
	drawStarz(50,100,0.5);
	drawStarz(245,160,0.5);
	drawStarz(470,50,0.5);
	drawStarz(480,320,0.5);
	drawStarz(310,480,0.5);
	drawStarz(70,460,0.5);
	drawStarz(300,50,0.5);
	drawStarz(520,200,0.5);
	drawStarz(520,500,0.5);
	drawStarz(175,540,0.5);

	// moving the fish once the mouse has been clicked
	if(fishUp && fishDropzz>60)
	{
		fishDropzz-=2;
	}

	// code used to display location while building code
	//fill(255,255,0);
	//textSize(20);
	//text('('+mouseX+','+mouseY+')',mouseX,mouseY);
}

// function for when mouse is clciked within a specific area
function mouseClicked()
{
	if(mouseX>260 && mouseX<310 && mouseY>300 && mouseY<360) // box located around the hands
	{
		fishUp = true;

	}
}
