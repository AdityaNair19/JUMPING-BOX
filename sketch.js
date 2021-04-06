var canvas;
var music;
var box
var block1;
var block2;
var block3;
var block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(5,5,10,2);
    block2 = createSprite(5,5,10,2);
    block3 = createSprite(5,5,10,2);
    block4 = createSprite(5,5,10,2);

    //create box sprite and give velocity
    box = createSprite(random(20,750);
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    box.shapeColor = "white";
    block1.shapeColor = "red";
    block2.shapeColor = "blue";
    block3.shapeColor = "yellow";
    block4.shapeColor = "green";

    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1) && box.bounceOff(block1)){
        //change color here 
        box.shapeColor = "red";
    }

    if(box.isTouching(block2) && box.bounceOff(block2)){
        //change color here 
        box.shapeColor = "blue";
    }

    if(box.isTouching(block3) && box.bounceOff(block3)){
        //change color here 
        box.shapeColor = "yellow";
    }

    if(box.isTouching(block4) && box.bounceOff(block4)){
        //change color here 
        box.shapeColor = "green";
    }
}
