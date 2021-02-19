const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var b1, b2, b3, b4, b5;

var knife, apple, banana, pineapple, orange, grapes;
var knifeImage, appleImage, bananaImage, pineappleImage;
var orangeImage, grapesImage;

function preload() {
    knifeImage = loadImage("images/knifeImg.png");
    appleImage = loadImage("images/appleImg.png");
    bananaImage = loadImage("images/bananaImg.png");
    pineappleImage = loadImage("images/pineappleImg.png");
    orangeImage = loadImage("images/orangeImg.png");
    grapesImage = loadImage("images/grapesImg.png");
}

function setup() {
    createCanvas(800, 700);

    b1 = createSprite(400, 5, 800, 10);
    b1.visible = false;
    b2 = createSprite(5, 350, 10, 700);
    b2.visible = false;
    b3 = createSprite(795, 350, 10, 700);
    b3.visible = false;
    b4 = createSprite(400, 500, 800, 10);
    b4.visible = false;
    b5 = createSprite(400, 695, 800, 10);
    b5.visible = false;

    knife = createSprite(400, 620, 20, 60);
    knife.addImage("knife", knifeImage);
    knife.scale = 0.2;

    apple = createSprite(100, 50, 20, 20);
    apple.addImage("apple", appleImage);
    apple.scale = 0.15;
    apple.velocityX = 5;
    apple.velocityY = 3;

    banana = createSprite(500, 100, 20, 20);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.15;
    banana.velocityX = 5;
    banana.velocityY = 3;

    pineapple = createSprite(190, 410, 20, 20);
    pineapple.addImage("pineapple", pineappleImage);
    pineapple.scale = 0.15;
    pineapple.velocityX = 5;
    pineapple.velocityY = 3;

    orange = createSprite(350, 80, 20, 20);
    orange.addImage("orange", orangeImage);
    orange.scale = 0.15;
    orange.velocityX = 5;
    orange.velocityY = 3;

    grapes = createSprite(40, 200, 20, 20);
    grapes.addImage("grapes", grapesImage);
    grapes.scale = 0.15;
    grapes.velocityX = 5;
    grapes.velocityY = 3;

    
    engine = Engine.create();
    world = engine.world;
    
    

    Engine.run(engine);
}


function draw() {
    background("lightBlue");
    Engine.update(engine);


    if(keyDown(LEFT_ARROW)) {
        knife.x = knife.x - 25;
    }
    if(keyDown(RIGHT_ARROW)) {
        knife.x = knife.x + 25
    }
    if(keyDown("SPACE")) {
        knife.velocityY = -10;
    }


    apple.bounceOff(b1);
    apple.bounceOff(b2);
    apple.bounceOff(b3);
    apple.bounceOff(b4);

    banana.bounceOff(b1);
    banana.bounceOff(b2);
    banana.bounceOff(b3);
    banana.bounceOff(b4);

    pineapple.bounceOff(b1);
    pineapple.bounceOff(b2);
    pineapple.bounceOff(b3);
    pineapple.bounceOff(b4);


    orange.bounceOff(b1);
    orange.bounceOff(b2);
    orange.bounceOff(b3);
    orange.bounceOff(b4);

    grapes.bounceOff(b1);
    grapes.bounceOff(b2);
    grapes.bounceOff(b3);
    grapes.bounceOff(b4);

    // knife.bounceOff(b1);
    knife.bounceOff(b2);
    knife.bounceOff(b3);
    knife.bounceOff(b5);

    if(knife.isTouching(apple)) {
        apple.visible = false;
    }

    if(knife.isTouching(banana)) {
        banana.visible = false;
    }

    if(knife.isTouching(pineapple)) {
        pineapple.visible = false;
    }

    if(knife.isTouching(orange)) {
        orange.visible = false;
    }

    if(knife.isTouching(grapes)) {
        grapes.visible = false;
    }


    drawSprites();
}