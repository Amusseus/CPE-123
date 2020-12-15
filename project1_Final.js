const { LINEAR, TRIANGLES, HALF_PI, QUADRATIC, FILL, STROKE } = require("./libraries/p5");
//Variables

var indWidth; // individual width for each drawing
// x,y,scale, and rotation variables for the Sorcerer
var xTransSor;
var yTransSor;
var resize;
var rot;
// variables for the deer drawings
var cenx;
var censun;
var xdeer1; 
var xdeer2; 
// variable for the person in the middle
var personMove;
// booleans used for animation 
var checkPersonGo = false;
var checkLadyGo = false;
var checkDeerGo = false;

function setup() {
	createCanvas(1200, 400);
	// Defining Variables
	xTransSor = 820;
	yTransSor = 290;
	resize = .5;
	rot = 0;
	indWidth=400;
	cenx = 200;
	censun = 175;
	xdeer1 = 10;
	xdeer2 = 140;
	personMove = indWidth +40;
}

//functions for Sorcerer Drawing
function feet(){
	push();
		noStroke();
		fill(255, 0, 0);
		rect(0, 105, 50, 30);
	pop();
}
function basket(){
	push();
		noFill();
		stroke(204, 204, 0);
		strokeWeight(10);
		arc(205, -60, 50, 50, PI, 0);
	pop();

	push();
		noStroke();
		fill(204, 204, 0);
		rect(200, -60, 40, 40, 5);
	pop();
}
function head(){
	push();
		//Hood
		noStroke();
		fill(0, 102, 0);
		ellipse(175, -210, 70, 80);

		//Face
		fill(288, 220, 149);
		ellipse(196, -210, 30, 60);

		//Eye
		stroke('blue');
		strokeWeight(5);
		point(indWidth / 2, -220);

		//Mouth
		noFill();
		stroke('red');
		strokeWeight(3);
		arc(210, -190, 20, 20, 5 * PI / 4, 3 * PI / 2);

		//Nose
		noStroke();
		fill(288, 220, 149);
		triangle(210, -220, 220, -205, 210, -205);
	pop();
}
function sorciere(x, y, z, r){

	translate(x, y);
	scale(z);
	rotate(r);
	
	push();
		//Basket
		basket();

		//Bottom half of body
		push();
			noStroke();
			fill(0, 102, 0);
			quad(0, 0, indWidth / 2, -100, indWidth / 2, 0, 0, 100);

			fill(204, 204, 0);
			quad(0, 80, indWidth / 2, 0, indWidth / 2, 105, 0, 110);

			//feet
			feet();

			push();
				translate(150, 0);
				feet();
			pop();

			//Top half of body
			fill(0, 102, 0);
			triangle(0, -10, indWidth / 2, -110, 80, -200);

			fill(0, 102, 0);
			arc(130, -110, 140, 250, 4 * PI / 3, 0);
		pop();

		//Head
		head();

		//Bow

		fill(0, 102, 204);
		ellipse(indWidth / 2, -140, 15, 30);

		fill(0, 102, 204);
		ellipse(210, -150, 30, 15);

		noStroke();
		fill(0, 102, 204);
		ellipse(indWidth / 2, -150, 20);

		//Staff
		fill(144, 89, 7);
		quad(215, -140, 225, -140, 190, 130, 185, 130);

		//Hand
		noStroke();
		fill(288, 220, 149);
		rect(indWidth / 2, -100, 30, 30, 10);

		fill(288, 220, 149);
		rect(205, -110, 10, 20, 10);

		//Sleeve
		fill(0, 102, 0);
		arc(197, -76, 30, 46, 3 * PI / 2, PI / 2);
	pop();

	}

function tree(){
	push();
		noStroke();
		fill(0, 0, 150);
		rect(50, 150, 30, 250);

		push();
			fill(0, 0, 150);
			rotate(0.149066);
			rect(73, -100, 30, 250);
		pop();

		push();
			fill(0, 0, 150);
			rotate(PI / 4);
			rect(120, -60, 30, 100);
		pop();
	pop();	
}
function sky(x, y){
	push();
		noStroke();
		fill(0, 100, 255, 160);
		rect(x, y, 400, 150);
	pop();
}
function moveTreeX(x){
	push();
		translate(x,0);
		tree();
	pop();
}
function backdrop(x,y){
	push();
		translate(x,y);
		fill(223, 210, 24, 100);
		rect(0, 0, 400, 400);

		push();
			translate(270,-50);
			tree();
		pop();

		sky(0, 0);
		sky(0, -50);

		//tree();	
	pop();
	push();
		moveTreeX(800);
	pop();
}

//functions for Person Drawing
function drawTree(x, y,scalezz){
	push();
		noStroke();
		fill(40,26,13); //Tree Brown
		scale(scalezz);
		translate(x/scalezz,y/scalezz);
		rect(0,0,30,250,20)
		push();
		//left side branches
			rotate(3*PI/4);
			rect(-10,-20,20,100,20);
			rect(-60,-15,15,40,20);
			rect(-18,85,15,40,20);
			rotate(PI/6);
			rect(27,50,15,80,15);
			rect(-110,50,15,80,15);
		pop();
		push();
		//right side branches
			rotate(-3*PI/4);
			rect(-30,0,20,100,20);
			rect(-25,95,15,60,20);
			rect(90,10,15,60,20);
			rotate(-PI/6);
			rect(-70,60,15,80,15);
		pop();
	pop();
}
function drawPerson(x,y,scalez){
	push();
		noStroke();
		scale(scalez);
		translate(x/scalez,y/scalez);
		fill(230,110,118);   // red color
		ellipse(0,0,40,40); //face
		fill(80,160,230);   // light blue color
		quad(-20,-10,-10,-40,10,-40,20,-10); // top hat
		fill(22,52,230);    // darker blue
		quad(-10,20,-25,80,25,80,10,20); // body
		rect(-20,75,10,25,5);            // left leg
		rect(10,75,10,25,5);             // right leg
		fill(230,110,118);               // red color
		ellipse(-5,60,10,10);    // hand
	pop();
}
function drawBackground(x,y){
	push();
		fill(217,22,22);         // deep red 
		noStroke();
		ellipse(x,y,220,220); // background sun
	pop();
}

//function for Deer Drawing
function deer(deerx, deery, s){
	push();
	 translate(deerx, deery);
	 scale(s);
	 noStroke();

	 //legs
	 fill(0);
	 rect(20, -70, 15, 40);
	 rect(40, -70, 15, 40);
	 rect(70, -70, 15, 40);
	 rect(90, -70, 15, 40);

	 //body
	 rect(10, -120, 105, 50);
	 triangle(10, -120, -5, -100, 10, -105);

	 //head & neck
	 rect(85, -140, 30, 20);
	 beginShape();
	   vertex(85, -130);
	   vertex(85, -160);
	   vertex(115, -160);
	   vertex(115, -145);
	   vertex(130, -145);
	   vertex(125, -130);
	 endShape();

	 //antlers left
	 stroke(0);
	 strokeWeight(5);
	 line(95, -160, 88, -168);
	 strokeWeight(4);
	 line(88, -168, 84, -178);
	 line(88, -168, 80, -163);
	 strokeWeight(3);
	 line(80, -163, 75, -155);
	 line(80, -163, 73, -168);
	 line(84, -178, 76, -186);
	 line(84, -178, 90, -186);
	 //antlers right
	 strokeWeight(5);
	 line(105,-160, 112, -168);
	 strokeWeight(4);
	 line(112, -168, 116, -178);
	 line(112, -168, 120, -163);
	 strokeWeight(3);
	 line(120, -163, 125, -155);
	 line(120, -163, 127, -168);
	 line(116, -178, 108, -186);
	 line(116, -178, 122, -186);
	pop();
}
function cloud(x, y, s){
	push();
	 translate(x, y);
	 scale(s);

	 fill(38, 0, 100);
	 noStroke();
	 beginShape();
	 curveVertex(0, 0);
	 curveVertex(0, 0);
	 curveVertex(7, -8);
	 curveVertex(15, -10);
	 curveVertex(25, -20);
	 curveVertex(40, -23);
	 curveVertex(50, -18);
	 curveVertex(55, -17);
	 curveVertex(60, -13);
	 curveVertex(65, -11);
	 curveVertex(70, -5);
	 curveVertex(73, 0);
	 curveVertex(73, 0);
	 endShape();
	pop();
}
function treeZZ(x, y, s){
	push();
	 translate(x, y);
	 scale(s);

	 fill(0);
	 beginShape();
	  vertex(0, 0);
	  vertex(10, -50);
	  vertex(5, -100);
	  vertex(5, -125);
	  vertex(0, -175);
	  vertex(7, -200);
	  vertex(12, -225);
	  vertex(15, -275);
	  vertex(20, -230);
	  vertex(18, -200);
	  vertex(25, -150);
	  vertex(23, -125);
	  vertex(27, -100);
	  vertex(30, -50);
	  vertex(30, 0);
	 endShape();
	 stroke(0);
	 strokeWeight(4);
	 line(13, -225, 5, -235);
	 strokeWeight(8);
	 line(18, -200, 40, -230);
	 line(25, -150, 60, -170);
	 line(7, -100, -20, -130);
	 strokeWeight(12);
	 line(24, -75, 50, -105);
	pop();
}
function drawPinkBackGround(){
	fill(255,108,109);
	rect(0,0,400,400);
}
function drawSun(x,y){
	push();
		translate(x,y);
		fill(255, 255, 255);
		noStroke();
		ellipse(0, 0, 60, 60);
		stroke(255, 255, 255);
		strokeWeight(1);
		translate(-x,-y);
		line(cenx, censun, indWidth, 175);
		line(cenx, censun, indWidth, 150);
		line(cenx, censun, indWidth, 125);
		line(cenx, censun, indWidth, 100);
		line(cenx, censun, indWidth, 75);
		line(cenx, censun, indWidth, 50);
		line(cenx, censun, indWidth, 25);
		line(cenx, censun, indWidth, 0);
		line(cenx, censun, 370, 0);
		line(cenx, censun, 340, 0);
		line(cenx, censun, 310, 0);
		line(cenx, censun, 280, 0);
		line(cenx, censun, 250, 0);
		line(cenx, censun, 220, 0);
		line(cenx, censun, 200, 0);
		line(cenx, censun, 180, 0);
		line(cenx, censun, 150, 0);
		line(cenx, censun, 120, 0);
		line(cenx, censun, 90, 0);
		line(cenx, censun, 60, 0);
		line(cenx, censun, 30, 0);
		line(cenx, censun, 0, 0);
		line(cenx, censun, 0, 25);
		line(cenx, censun, 0, 50);
		line(cenx, censun, 0, 75);
		line(cenx, censun, 0, 100);
		line(cenx, censun, 0, 125);
		line(cenx, censun, 0, 150);
		line(cenx, censun, 0, 175);
	pop();
}
function drawClouds(){
	cloud(25, 100, 1);
	cloud(125, 150, 1.5);
	cloud(200, 50, 1);
	cloud(300, 100, 2);
}
function drawGoodTrees(){
	treeZZ(50, 280, 1);
	treeZZ(150, 280, 0.75);
	treeZZ(225, 280, 1);
	treeZZ(320, 280, 1);
}
function drawLandz(x,y){
	push();
		translate(x,y);
		noStroke();
		fill(245, 166, 10);
		rect(0,0,indWidth, 225);
	pop();
}
function drawMountainz(x,y){
	push();
		translate(x,y);
		noStroke();
		fill(0, 175, 0);
		beginShape();
		  curveVertex(400, 225);
		  curveVertex(400, 225);
		  curveVertex(400, 150);
		  curveVertex(290, 180);
		  curveVertex(250, 225);
		  curveVertex(250, 225);
		endShape();

		fill(0, 100, 0);
		beginShape();
		  curveVertex(0, 280);
		  curveVertex(0, 280);
		  curveVertex(0, 200);
		  curveVertex(55, 175);
		  curveVertex(115, 230);
		  curveVertex(200, 280);
		  curveVertex(200, 280);
		endShape();
	pop();
}
function drawForeGround(){
	fill(0, 35, 0);
	rect(0, 280, indWidth, 120);
}

// for animation, uses if-loops to check and update values of the deer, person and sorcerer
function checkUP(){

	if(checkDeerGo && xdeer2<=370){ 
		xdeer1 += 1;
		xdeer2 += 1;	
	}
	if(checkDeerGo && checkPersonGo)
	{
		xdeer1+=1;
	}
	if(xdeer2==370){
		checkPersonGo=true;
	}
	if(checkPersonGo){
		personMove +=1;
	}
	if(personMove>800){
		xTransSor+=1;
	}
	if(xdeer1==1050)
	{
		checkDeerGo=false;
	}
}

// starts the animation if mouse is clicked on big deer
function mouseClicked(){
	if(mouseX>4 && mouseX<140 && mouseY>240 && mouseY<400) // box located around the hands
	{
		checkDeerGo = true;

	}
}

// Click on Big Deer to start the Animationsss
function draw() {
	background(255);
	// Setting up the Sorcerer Drawing
	backdrop(800,0);
	push();
		sorciere(xTransSor, yTransSor, resize, rot);
	pop();

	// Setting up the Person Drawing
	drawBackground(600,80);
	drawTree(50+indWidth,200,0.5);
	drawTree(200+indWidth,200,0.5);
	drawTree(350+indWidth,200,0.5);
	drawPerson(personMove,300,0.75);
		
	// Setting up the Deer Drawing	
	drawPinkBackGround();
	drawLandz(0,175);
	drawMountainz(0,0);
	drawForeGround();
	drawSun(200,175);
	drawClouds();
	drawGoodTrees();
	deer(xdeer1, 430, 1);
	deer(xdeer2, 420, 0.5);

	// checks values and updates them
	checkUP();
	
		



}