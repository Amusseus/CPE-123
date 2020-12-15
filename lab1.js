
function setup() {
	createCanvas(400, 400);
}


function draw() {
// Background - Blue sky + sun + tree
	background(124,219,235);
	fill(242,215,51); // Yellow
		ellipse(10,10,200,200); // sun
	fill(210,105,30); // Brown
		rect (305,150,50,175,10); // tree trunk
	fill(46,219,26);  //Light Green
		rect(0, 0.8*height, width,0.2*height); // grass ground
	fill(19,131,22);  // Dark Green
		noStroke();    
		// Tree leaves
		ellipse(300,140,120,120);
		ellipse(360,140,120,120);
		ellipse(330,75,120,120);

// Legs (X2)
	fill(250,132,1); //orange
	push(); //left leg
		translate(140,285);
		rotate(-PI/12);
		rect(0,0,20,50,10);
	pop();
	push(); // right leg
		translate(175,275);
		rotate(-PI/12);
		rect(0,0,20,50,10);
	pop();

//left feet
	triangle(150,310,140,340,165,330);
	triangle(150,330,170,350,170,320);
	triangle(165,310,185,320,165,330);
//Right feet
	push();
		translate(35,-10);
		triangle(150,310,140,340,165,330);
		triangle(150,330,170,350,170,320);
		triangle(165,310,185,320,165,330);
	pop();
//Beak
	triangle(280,100,330,80,280,120);
	triangle(280,100,330,140,280,120);


// Head 
	fill(225,225,225); //White
	ellipse(240,100,100,100);
	triangle(210,60,210,145,180,90);
// Eye
	push();
		stroke(2);
		fill(217,53,37); //Red
		ellipse(230,85,15,15);
	pop();

// Neck
	push();
		translate(210,120);
		rotate(PI/8);
		rect(0,0,40,90,25);
	pop();
// Body
	push();
		translate(150,240);
		rotate(-PI/12);
		ellipse(0,0,180,100);
	pop();
//tail
triangle(80,225,85,285,45,260);
//left and right wings
quad(80,40,70,140,180,200,180,140);
quad(30,150,70,210,180,200,180,140);

	

}