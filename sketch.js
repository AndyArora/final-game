var basket;
var basketimg;
var score
var bballgroup;
var gball;
var gballgroup;
var sball;
var sballgroup;
var gamestate = "play"
var level2
var gamendimg;

function preload(){
	basketimg = loadImage("whitehat game net.png") 
	backgroundimg = loadImage("DababyWhitehat.png")
	ballimg = loadImage("basketballwhiite.png")
	gballimg = loadImage("goldenbball.png")
	sballimg = loadImage("sball.png")
	level2img = loadImage("levelclearedksi.jpg")
	gamendimg = loadImage("whiteGamendimg.png")
	continuedimg = loadImage("continuedbackground.jpg")
}
function setup(){
createCanvas(750,600)
if(gamestate === "continued"){
	background(continuedimg)
	basket = createSprite(300,510,45,30)
basket.addImage(basketimg)
basket.scale = 0.2

}
else{
	basket = createSprite(300,510,45,30)
	basket.addImage(basketimg)
	basket.scale = 0.4
}
score = 0;
bballgroup = new Group()
gballgroup = new Group()
sballgroup = new Group()
edges = createEdgeSprites();
     
}

function draw (){
	if(gamestate === "continued"){
		background(continuedimg)
	}
	else
background(backgroundimg)
if(gamestate === "play"||gamestate === "continued"){
spawnbballs();
spawngballs();
spawnsballs();
}

if(gamestate === "continued"&& score<-5){
gamestate = "end" 
}

textSize(25)
fill("black")
text("Score :"+ score,50,50)
drawSprites();
basket.x = mouseX;
for(var i = 0; i<bballgroup.length;i++){
	if(bballgroup.get(i).isTouching(basket)){
		bballgroup.get(i).destroy()
		score = score +1
	}
}
for(var i = 0; i<gballgroup.length;i++){
	if(gballgroup.get(i).isTouching(basket)){
		gballgroup.get(i).destroy()
		score = score +3
	}
}
for(var i = 0; i<bballgroup.length;i++){
	if(bballgroup.get(i).isTouching(edges[3])){
		bballgroup.get(i).destroy()
		score = score -3
	}
}
for(var i = 0; i<sballgroup.length;i++){
	if(sballgroup.get(i).isTouching(basket)){
		sballgroup.get(i).destroy()
		score = score -5
	}
}

 if(score>50&& gamestate === "play"){
	gamestate = "pause"
 }
 if(score>75){
	 gamestate = "end"
 }
if(gamestate === "end"){
	sballgroup.destroyEach()
	gballgroup.destroyEach()
	bballgroup.destroyEach()
	sballgroup.destroyEach()
background(gamendimg)
}

if(gamestate === "pause"){
	sballgroup.destroyEach()
	gballgroup.destroyEach()
	bballgroup.destroyEach()
	sballgroup.destroyEach()
		background(level2img)
	  
}
console.log(gamestate)
if(keyDown("space")){
	gamestate = "continued"
	score = 0;	
}

}




function spawnbballs(){
	
	if(frameCount%40 === 0){
	var bball = createSprite(random(0,750),0,25,25)
	bballgroup.add(bball)
	bball.addImage(ballimg)
	bball.scale = 0.135
	if(gamestate === "continued"){
		bball.scale = 0.095
		bball.velocityY = 17
	}
	else{
	bball.scale = 0.135
	bball.velocityY = 15
}
	}
}

function spawngballs(){
	
	if(frameCount%55 === 0){
	var gball = createSprite(random(0,750),0,25,25)
	gball.velocityY = 20
	gballgroup.add(gball)
	gball.addImage(gballimg)
	gball.scale = 0.135
	if(gamestate === "continued"){
		gball.scale = 0.095
		gball.velocityY = 25
	}
	else{
	gball.scale = 0.135
	gball.velocityY = 20
}
gball.lifetime = 150;
	}
}

function spawnsballs(){
if(frameCount%67 === 0){
	var sball = createSprite(random(0,750),0,25,25)
	sballgroup.add(sball)
	sball.addImage(sballimg)
	sball.scale = 0.135
	if(gamestate === "continued"){
		sball.scale = 0.095
		sball.velocityY = 20
	}
	else{
	sball.scale = 0.135
	sball.velocityY = 17
}
	}
}
