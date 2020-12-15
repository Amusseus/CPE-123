var ice_cream;
var x;
var y;
var fC;

var scalez=1;
var xDir=400;
var yDir=400;
var fishDropzz; // how far down the fish starts
var fishUp = false; // boolean used to check if its the right time to fish
var dropLength;

function setup() 
{
	createCanvas(400, 400);
	x = width;
	y = 0;
	fC = false;
	dropLength = 210;
	fishDropzz = 1000;
}

//--------------
//Eric
//--------------

function iceberg(icex, icey, ices)
{
	push();
	 translate(icex, icey);
	 scale(ices);

	 fill(255, 255, 255);
	 stroke(0);
	 //strokeWeight(1.25);
	 beginShape();
	  vertex(0,0);
	  vertex(20, -20);
	  vertex(30, -40);
	  vertex(40, -30);
	  vertex(50, -55);
	  vertex(60, -45);
	  vertex(75, -80);
	  vertex(85, -60);
	  vertex(90, -65);
	  vertex(95, -50);
	  vertex(110, -30);
	  vertex(115, -35);
	  vertex(125, -20);
	  vertex(135, -10);
	  vertex(140, 0);
	 endShape();
	 beginShape();
	  vertex(80, 0);
	  vertex(90, -30);
	  vertex(95, -20);
	  vertex(105, -50);
	  vertex(110, -35);
	  vertex(115, -25);
	  vertex(125, -10);
	  vertex(130, 0);
	 endShape();
	 beginShape();
	  vertex(0, 0);
	  vertex(15, -30);
	  vertex(25, -15);
	  vertex(30, -25);
	  vertex(35, -10);
	  vertex(45, -15);
	  vertex(55, 0);
	 endShape();
	pop();
}

function cloud(x, y, s)
{
	push();
	 translate(x, y);
	 scale(s);

	 fill(255);
	 stroke(0);
	 strokeWeight(1);
	 beginShape();
	 curveVertex(0, 0);
	 curveVertex(0, 0);
	 curveVertex(7, -8);
	 curveVertex(15, -10);
	 curveVertex(25, -23);
	 curveVertex(40, -25);
	 curveVertex(47, -20);
	 curveVertex(55, -19);
	 curveVertex(60, -13);
	 curveVertex(65, -11);
	 curveVertex(70, -5);
	 curveVertex(73, 0);
	 curveVertex(0, 0);
	 curveVertex(0, 0);
	 endShape();
	pop();
}

function dolphin(x, y, s)
{
	push();
	 translate(x, y)
	 scale(s)
	 stroke(0);
	 strokeWeight(1);
	 fill(140);
	 beginShape();
	  curveVertex(0, 0);
	  curveVertex(0, 0);
	  curveVertex(5, -3);
	  curveVertex(10, -3);
	  curveVertex(20, -12);
	  curveVertex(20, -12);
	  curveVertex(17.5, -15);
	  curveVertex(15, -15);
	  curveVertex(20, -18);
	  curveVertex(30, -17);
	  curveVertex(35, -18);
	  curveVertex(40, -18);
	  curveVertex(45, -16);
	  curveVertex(50, -14);
	  curveVertex(45, -13);
	  curveVertex(35, -9);
	  curveVertex(25, -5);
	  curveVertex(15, -1);
	  curveVertex(20, 0);
	  curveVertex(22, 4);
	  curveVertex(11, 1);
	  curveVertex(0, 0);
	  curveVertex(0, 0);
	 endShape();
	 beginShape();
	  curveVertex(36, -12);
	  curveVertex(36, -12);
	  curveVertex(40, -10)
	  curveVertex(41, -7);
	  curveVertex(38, -8);
	  curveVertex(34, -9);
	  curveVertex(34, -9);
	 endShape();
	pop();
}

function fish(x, y, s)
{
	push();
	translate(x, y);
	scale(s);
	fill(255, 140, 27)
	stroke(0)
	strokeWeight(1)

	triangle(0, 0, 5, 5, 0, 10)
	ellipse(12.5, 5, 15, 10)
	fill(0)
	ellipse(16, 3.5, 2, 2)
	pop()
}

function Cone(x, y, s)
{
	push();
	translate(x, y);
	scale(s);
	fill(255, 123, 0);
	stroke(0);
	strokeWeight(1);

	triangle(0, 0, 70, 140, 140, 0);
	line(20, 0, 80, 117)
	line(40, 0, 90, 99);
	line(60, 0, 100, 80);
	line(80, 0, 110, 58);
	line(100, 0, 120, 38);
	line(120, 0, 130, 19);
	line(130, 0, 60, 117);
	line(110, 0, 50, 99);
	line(90, 0, 40, 80);
	line(70, 0, 30, 58);
	line(50, 0, 20, 38);
	line(30, 0, 10, 19);
	pop();
}


//--------------
//Anthony
//--------------

function button(x, y){
	fill(0);
	ellipse(x, y, 10);
}

function head(x, y){
	stroke(0);
	fill(224, 195, 100);
	ellipse(x, y, 80, 105);

	eye(185, 200);
	eye(215, 200);

	nose(200, 210);

	fill(246, 153, 107);
	ellipse(x, y + 26, 25, 5);

	//hat(10, -185);
}

function eye(x, y){
	stroke(0);
	fill(255);
	ellipse(x, y, 15, 10);

	noStroke();
	fill(0, 0, 255);
	ellipse(x, y + 2, 5, 5);
}

function nose(x, y){
	stroke(0);
	noFill();
	arc(x, y, 5, 10, 0, PI);
}

function hat(x, y){
	stroke(255);
	fill(0);
	rect(x, y, 80, 65, 20, 20);
	rect(x - 20, y + 50, 120, 15);
}

function clock(x, y){
	push();
		stroke(0);
		strokeWeight(2);
		fill(255);
		ellipse(x, y, 100);

		textSize(20);
		push();
			fill(0);
			noStroke();
			text('3', x + 35, y + 10);
			text('6', x - 5, y + 45);
			text('9', x - 45, y + 10);
		pop();
		push();
			stroke(0);
			strokeWeight(5);

			point(x + 33, y + 20);
			point(x + 20, y + 30);
			point(x - 20, y + 30);
			point(x - 33, y + 20);
			point(x + 33, y - 15);
			point(x - 33, y - 15);

			line(x, y + 2, x + 35, y + 2);
			line(x, y + 2, x + 25, y + 18);

			strokeWeight(10);
			point(x, y + 2);
		pop();
	pop();
}

function body(x, y){
	translate(x, y);
	push();
		fill(0);
		stroke(255);
		rect(-50, -50, 200, 250, 30, 30, 0, 0);

		noStroke();
		fill(223, 195, 100);
		rect(30, -70, 40, 20);

		fill(255);
		noStroke();
		triangle(10, -50, 90, -50, 50, 70);

		push();
			stroke(0);
			line(40, 50, 40, -35);
			line(60, 50, 60, -35);
		pop();

		fill(200, 0, 0);
		quad(20, -45, 20, -25, 80, -45, 80, -25);

		stroke(255);
		line(-10, 200, -10, 30);
		line(110, 200, 110, 30);

		button(50, -15);
		button(50, 5);
		button(50, 25);
		button(50, 45);
	pop();
}

function man(){
	body(150, 300);
}


//-------------------
//Amogh
//-------------------

function drawRotatedRect(rot,x,y,widthzz,heightzz,curvezz)
{
	push();
		translate(x,y);
		rotate(rot);
		rect(0,0,widthzz,heightzz,curvezz);
	pop();
}


function drawBackground(x,y,widthzzz,heightzzz)
{
	push();

		fill(248,207,108);  //yellow
		ellipse(x,y,widthzzz,heightzzz);
		fill(0);
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
		rect(130, -140, 3, droplength - 20,1);        // fishing line
	pop();
}


function drawFish(x,y,scalez)
{	
	push();
		translate(20, 0);
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

	//console.log(dl);
}

function draw() 
{
	//----------Eric----------
	background(0);

	//ocean
	noStroke();
	fill(0, 0, 255);
	rect(0, 200, 400, 200);

	//sky
	cloud(40, 80, 1.15);
	cloud(30, 80, .85);
	//cloud(280, 50, 1.5);
	cloud(150, 115, 1);
	cloud(225, 80, 0.5);
	cloud(-25, 150, 1);
	//cloud(325, 175, 1.25);


	push();
		translate(120,-50);
		noStroke();
		scale(.45);
		drawBackground(400,250,300,300);
		drawPerson(400,290,1);
		drawFishRod(440,350,1,fishDropzz);
		push();
			drawFish(550,fishDropzz + 100,1);
		pop();


		//console.log(fishUp);

	pop();

	if(fishUp && fishDropzz>200)
	{
		fishDropzz -= 5;
	}
	else if(!fishUp && fishDropzz < 1000){
		fishDropzz += 5;
	}


	push();
		translate(100, -50);
		scale(.5);
		man();
	pop();
	iceberg(110, 200, 1.25);

	//animals
	dolphin(50, 200, 1.25);
	dolphin(15, 200, 0.8);
	dolphin(275, 200, 0.8);
	dolphin(315, 200, 0.8);
	dolphin(355, 200, 0.8);

	fish(300, 300, 2);
	fish(350, 225, 1.25);
	fish(50, 250, 1.5);
	fish(75, 350, 1.75);

	if(ice_cream)
	{
		Cone(110, 200, 1.25)
		fill(250, 222, 0)
		stroke(0)
		strokeWeight(1)
		//ellipse(0, 0, 100, 100)
	}

	if(fC == false){
		push();
			translate(100, -50);
			scale(.5);
			head(200, 195);
		pop();
	}
	else if(fC == true){
		push();
			translate(100, -85);
			scale(.5);
			clock(200, 270);
		pop();
	}
	scale(.5);
	hat(360, 20);


	/*
	frameRate(12);
	scale(2);
  	text("X: "+mouseX, 0, height/4);
	  text("Y: "+mouseY, 0, height/2);
	*/
	

}

function mouseClicked()
{
	//-------Eric-------
	if(mouseX > 110 && mouseX < 285 && mouseY > 100 && mouseY < 200)
	{
		//create cone
		ice_cream = true
	}

	//-------Anthony-------
	if(fC == false && mouseX > 180 && mouseX < 220 && mouseY < 70 && mouseY > 20){
		fC = true;
		console.log('False');
	}
	else if(fC == true && mouseX > 180 && mouseX < 220 && mouseY < 70 && mouseY > 20){
		fC = false;
		console.log('True');
	}

	//-------Amogh--------
	if(mouseX>290 && mouseX<330 && mouseY>60 && mouseY<150) // box located around the hands
	{
		if(fishUp == false){
			fishUp = true;
			console.log('True');
		}
		else{
			fishUp = false;
		}

	}
}