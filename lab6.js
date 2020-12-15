// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, leftLegR, rightLegR, beakR;

var neckDown = true;
var wingDown = false;
var leftLegUp = false;
var rightLegUp = false;
var beakOpen = true;
var animate = false;

// normal set up
function setup() {
   createCanvas(400, 400);

   loc = createVector(width*.90, height*.7);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   beakR= 0;
   leftLegR = PI/6;
   rightLegR = -PI/4;
}

// normal draw
function draw() {
   drawBackGround();
   drawDuck();
   if (animate) 
   {
      moveDuck();
   }
}

// draws background with 3 trees, grass, walking path, and fences
function drawBackGround(){
	push();	
		background(95,165,245);
		fill(78, 155, 16);
   		rect(0, height -height/3, width, height/3);
   		fill(245,210,170);
   		rect(0,320,width,40);
   		drawTree(50,160);
   		drawTree(150,180);
   		drawTree(250,160);
   		drawTree(350,180);
   		for(var i =0; i<10;i++){
   			drawFenceLong(40*i+20,245);
   		}
	pop();
}

function drawTree(x,y){
	push();
		translate(x,y);
		fill(100,65,30);
		rect(0,0,30,120,10);
		fill(5,105,15);
		triangle(-40,50,15,-50,70,50);
		triangle(-40,20,15,-80,70,20);
		triangle(-40,-10,15,-130,70,-10);
	pop();
}

function drawFenceLong(x,y){
	push();
		fill(45,45,45);
		translate(x,y);
		rect(0,0,10,80,5);
		triangle(0,5,5,-10,10,5);
		rect(-20,20,width,10,5);
		rect(-20,50,width,10,5);
	pop();
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() {
   loc = createVector(width*.9, height*.7);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() {
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck


      fill(235,100,25); // orange
      push(); // right leg
      	translate(5,5);
      	rotate(rightLegR);
      	rect(0,0,5,20,10);
      	triangle(-10,20,5,20,5,15);
      pop();

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye

        fill(235,100,25); // orange
      	push();
      		translate(-3,-18);
      		rotate(beakR);
      		triangle(-9, 0, -3, -3, 0, 0); //top beak
      	pop();

       	push();
       		translate(-3,-18);
       		rotate(-beakR);
      		triangle(-9, 0, -3, 3, 0, 0); // bottom beak
      	pop();

      pop();


      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 
      fill(235,100,25); // orange
      push(); // left leg
      	translate(-5,10);
      	rotate(leftLegR);
      	rect(0,0,5,20,10);
      	triangle(-10,20,5,20,5,15);
      pop();
 
   pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() {
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown) 
   {
      neckR -= PI/30;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/10;
   } 
   else 
   {
      wingR += PI/10;
   }

    if (leftLegR >PI/4) 
   {
      leftLegUp = false;
   } 
   if (leftLegR < -PI/4) 
   {
      leftLegUp = true;
   }

   if (leftLegUp) 
   {
      leftLegR += PI/100;
   } 
   else 
   {
      leftLegR -= PI/100;
   }

    if (rightLegR >PI/4) 
   {
      rightLegUp = false;
   } 
   if (rightLegR < -PI/4) 
   {
      rightLegUp = true;
   }

   if (rightLegUp) 
   {
      rightLegR += PI/95;
   } 
   else 
   {
      rightLegR -= PI/95;
   }

   if (beakR >PI/8) 
   {
      beakOpen = false;
   } 
   if (beakR < 0) 
   {
      beakOpen = true;
   }

   if (beakOpen) 
   {
      beakR += PI/200;
   } 
   else 
   {
      beakR -= PI/200;
   }
}

