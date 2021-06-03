var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var garden, gardenImg;

function preload() {
    gardenImg = loadImage("garden.png");

    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png");
    catImg3 = loadAnimation("cat3.png");
    catImg4 = loadAnimation("cat4.png");

    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png");
    mouseImg3 = loadAnimation("mouse3.png");
    mouseImg4 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(50,160,20,50);
    cat.addAnimation( catImg );

    mouse = createSprite(50,160,20,50);
    mouse.addAnimation( mouseImg );

    edges = createEdgeSprites();

}

function draw() {
    background(gardenImg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
       cat.addAnimation("catRunning",catImg2);
       cat.changeAnimation("catRunnig");
    }

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARRROW) {
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }


}
