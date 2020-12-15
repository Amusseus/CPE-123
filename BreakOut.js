//global variables
var blockList = [0];
var ballRadius= 10;
var playerXPos= 300;
var playerScore = 0;
var gameLevel = 1;
// each block is going to be worth 10 points


//Ball & Bounce Physic Variables
var ballX = 500;
var ballY = 500;
var bX;
var bY;
var tempBX;
var ballCeiling = 40;
var bounceBall = false;   // bounce due to breaking blocks
var bounceBall2 = false;
var stopBY = false;
var playerBounce = false; // bounce due to player
var checkCount = true;    // counter to make sure player only bounces once
var checkBounceCount = true; // counter make sure the ball doesn't double bounce on blocks

// Scene Variables
var scene1 = true; // play scene
var scene2 = false;// game over scene

//reset block variables
var resetBlockXSize = 250;
var resetBlockYSize = 50;

//reset level
var restartLevel = false;

function setup() {
	createCanvas(800,600);
	
	tempBX = random(-3, 3);

	if(tempBX < 0){
		bX = tempBX - 2;
	}
	else{
		bX = tempBX + 2;
	}
	bY = random(-5, -4); 
    
	levelGenerator();
}
function levelGenerator(){
    var tempColorR=random(0,255)
	var tempColorG=random(0,255)
	var tempColorB=random(0,255)
	for(var layerNum =0; layerNum<6; layerNum++){
		
		for(var xLoc =0; xLoc< width; xLoc+=50){
			let tempBlock = {
					x:xLoc,
					y: ballCeiling + layerNum*30,
					xWidth:50,
					yWidth:25,
					blockColorR:tempColorR,
					blockColorG:tempColorG,
					blockColorB:tempColorB
				};
			blockList.push(tempBlock);
		}
          tempColorR=tempColorR*(6/5)
	  tempColorG=tempColorG*(6/5)
	  tempColorB=tempColorB*(6/5)
	}
}

function getRandColor(){
	var tempColor = color(random(0,255),random(0,255),random(0,255));
	return tempColor;
}
function detect(){

	for(var count = 0; count < blockList.length;count++){
		 var tempY2 = blockList[count].y+blockList[count].yWidth;
		 var tempX2 = blockList[count].x+blockList[count].xWidth;
		 var tempY = blockList[count].y;
		 var tempX = blockList[count].x;
		if(ballX > tempX && ballX < tempX2 && ballY < tempY2){
			//if(checkBounceCount){
				blockList.splice(count,1);
				//checkBounceCount = false;
				bounceBall = true;
				playerScore+=10;
			//}
			checkNum= count;
		}
	
		if(ballX > playerXPos && ballX < playerXPos + 200 && ballY > (560-(ballRadius/2)) && checkCount ) {
			playerBounce=true;
			checkCount= false;
			checkBounceCount = true;
		}
	}	
}
function drawBlocks(){
	for(var count = 0; count < blockList.length;count++){
	  	noStroke();
        fill(blockList[count].blockColorR,blockList[count].blockColorG,blockList[count].blockColorB);
		rect(blockList[count].x,blockList[count].y,blockList[count].xWidth,blockList[count].yWidth,10);
	}
}
function drawPlayer(){
	push();
		fill(255);
		rect(playerXPos,560,200,20,20);
		if(keyIsDown(LEFT_ARROW) && playerXPos>=0){
			playerXPos-=5;
		}
		if(keyIsDown(RIGHT_ARROW) && playerXPos<=600){
			playerXPos+=5;
		}

	pop();
}
function drawBall(x, y, sc){
	push();
		translate(x, y);
		scale(sc);

		fill(255);
		ellipse(0, 0, ballRadius);
	pop();
}
function updateBall(){
	ballX += bX;
	ballY += bY;
	if(bounceBall && stopBY == false){
		bY = -bY;
		bounceBall=false;
		checkCount=true;
		stopBY = true;
		//console.log("Change in bY from brick")
	} 
	if(bounceBall2){
		bX = -bX;
		bounceBall2 = false;
		checkcount = true;
		stopBY = false;
		console.log("Change in bX from brick");
	}
	if(playerBounce){
		bY = -bY;
		playerBounce=false;
		stopBY = false;
		//console.log("Change in bY from player");
	} 

	if(ballX >= width || ballX <= 0){
		bX = -bX;
		checkCount=true;
		//console.log("Change in bX from walls");
	}

	if(ballY <= 0){
	 	bY = -bY;
		checkCount = true;
		stopBY = false;
		//console.log("Change in bY from ceiling"); 
	}
}
function isGameOver(){
	if(ballY > height){
	 	scene1=false;
	 	scene2=true;
	}
}
function displayScore(){
	push();
		fill(255);
		textFont('Georgia');
		textSize(40);
		text("SCORE:"+ playerScore, 0,35);
		text("LEVEL:"+ gameLevel, 630,35);
	pop();
}
function gameOverDisplay(){
	push();
		fill(255,0,0);
		textFont('Georgia');
		textSize(100);
		text("GAME OVER", 100,height/2);
	pop();
}f
function restartButton(){
	push();
		fill(255,0,0);
		rect(width/2-(resetBlockXSize/2),3*height/4,resetBlockXSize,resetBlockYSize,20);
		fill(255);
		textFont('Georgia');
		textSize(40);
		text("Restart",width/2-(resetBlockXSize/4),3*height/4+37.5);
	pop();
}
function mouseClicked(){
	if(restartLevel == false && scene2 == true){
		restartLevel = true;
		console.log("Restart Level");
	}
	console.log("Click");
}

function startGame(){
	//console.log(bX);
	//console.log(bY);

	background(0);
	drawBlocks();
	drawBall(ballX, ballY, 1);
	updateBall();
	detect();
	drawPlayer();
	isGameOver();
	displayScore();
}

function resetVariables(){
	blockList = [0];
	ballRadius= 10;
	playerXPos= 300;
	playerScore = 0;
	
	ballX = 500;
	ballY = 500;

	ballCeiling = 40;
	bounceBall = false;
	playerBounce = false;
	checkCount = true;    
	checkBounceCount = true; 
	stopBY = false;

	scene1 = true; 
	scene2 = false;

	resetBlockXSize = 250;
	resetBlockYSize = 50;
}

function keyPressed(){
	if (keyCode == 32){
		playerScore = 960;
	}
}

function draw() {
	if(scene1){
		startGame();
	}
	if(scene2){
		background(0);
		gameOverDisplay();
		restartButton();
		if(restartLevel == true){
			resetVariables();
			levelGenerator();
			gameLevel = 1;
			tempBX = random(-3, 3);
			if(tempBX < 0){
				bX = tempBX - 2;
			}
			else{
				bX = tempBX + 2;
			}
			bY = random(-5, -4);
			restartLevel = false;
		}
	}
	
	if(playerScore >= 960){
		resetVariables();
		levelGenerator();
		if(bY > 0){
			bY = -bY;
		}
		bX *= 1.2;
		bY -= 2;
		gameLevel++;
	}
}