
function setup() {
	createCanvas(400,400);
	noLoop();
}


//fucntion to draw the jolly roger 
function drawMugiwara(x,y,scalezz,rot){
	push();
		scale(scalezz);
		translate(x/scalezz,y/scalezz);
		rotate(rot);
	
		fill(255); // color white
			quad(-40,30,40,-30,45,-20,-35,40); // top left to bottom right cross
			quad(40,30,-40,-30,-45,-20,35,40); // bottom left to top right cross
		fill(240,225,30); // yellowish color for the hat
			ellipse(0,0,50,50); // hat top part
		fill(255,0,0); // red
			rect(-25,-10,50,5,20); // red band around the hat
		fill(255); // back to white
			rect(-15,10,30,30,20); // jaw
			push();
			noStroke(); 
				arc(0,0,50,50,0,PI,OPEN); // face part
			pop();
		fill(240,225,30); // yellow 
			rect(-40,-5,80,5,10); // hat edges
		fill(0); // black
			ellipse(-10,10,10,10); // left eye
			ellipse(10,10,10,10);  // right eye
			ellipse(0,20,5,5);     // nose
			noStroke();
			// following rectangles make the mouth and teeth part 
			rect(-15,25,30,1,20);
			rect(-15,32,30,1,20);
			rect(-15,25,1,8,20);
			rect(-10,25,1,8,20);
			rect(-5,25,1,8,20);
			rect(0,25,1,8,20);
			rect(5,25,1,8,20);
			rect(10,25,1,8,20);
			rect(14,25,1,8,20);
	pop();
}


function draw() {// click the hand to fish
	background(0,0,0);
		// for loop runs 20 times to make 20 objects
		for(var count =0; count<10;count++){
			//using random function to assign each variable a random value within a certain range
			drawMugiwara(random(10,390),random(10,390),random(1,2),random(0,2*PI));
		}
	
	


}


