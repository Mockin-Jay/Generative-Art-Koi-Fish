// randomize the chance of a fish appearing after hitting a boundary
//  --> edit fish agent to randomize appearance when not in bound

// redraw the lilies, maybe try and program that lilies are not overlayed by lilypad
// decrease number of agents on screen

// store fish images in array
let fish0 = [];
let fish1 = [];
let fish2 = [];
let fish3 = [];
let fish4 = [];
let fish5 = [];
let fish6 = [];
let fish7 = [];
let fish8 = [];
let fish9 = [];

// store all fish images
let allFish = [];

// store all lilypads images
let alllilypads = [];

let displaylilypads = [];

let fishes = [];

let flowerimg;

let ripples = [];

let sound;


function preload() {

  // store images in fish0
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteZero/koi-fish-0000' + str(i) + '.png';
    img = loadImage(path);
    fish0.push(img);
  }
  allFish.push(fish0);

  // store images in fish1
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteOne/koi-fish-0100' + str(i) + '.png';
    img = loadImage(path);
    fish1.push(img);
  }
  allFish.push(fish1);

  // store images in fish2
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteTwo/koi-fish-0200' + str(i) + '.png';
    img = loadImage(path);
    fish2.push(img);
  }
  allFish.push(fish2);

  // store images in fish3
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteThree/koi-fish-0300' + str(i) + '.png';
    img = loadImage(path);
    fish3.push(img);
  }
  allFish.push(fish3);

  // store images in fish4
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteFour/koi-fish-0400' + str(i) + '.png';
    img = loadImage(path);
    fish4.push(img);
  }
  allFish.push(fish4);

  // store images in fish5
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteFive/koi-fish-0500' + str(i) + '.png';
    img = loadImage(path);
    fish5.push(img);
  }
  allFish.push(fish5);

  // store images in fish6
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteSix/koi-fish-0600' + str(i) + '.png';
    img = loadImage(path);
    fish6.push(img);
  }
  allFish.push(fish6);

  // store images in fish7
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteSeven/koi-fish-0700' + str(i) + '.png';
    img = loadImage(path);
    fish7.push(img);
  }
  allFish.push(fish7);

  // store images in fish8
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteEight/koi-fish-0800' + str(i) + '.png';
    img = loadImage(path);
    fish8.push(img);
  }
  allFish.push(fish8);

  // store images in fish9
  for (i = 0; i < 10; i++) {
    path = 'data/fishSpriteNine/koi-fish-0900' + str(i) + '.png';
    img = loadImage(path);
    fish9.push(img);
  }
  allFish.push(fish9);


  // store lilypads
  for (i = 1; i < 4; i++) {
    path = 'data/lilypad' + str(i) + '.png';
    img = loadImage(path);
    alllilypads.push(img);
  }

  // store flower image
  flowerimg = loadImage('data/lily.png');

  // load the sound
  sound = loadSound("data/audio3.wav");



}






function setup() {
  createCanvas(windowWidth, windowHeight); 

  for (i = 0; i < 20; i++) {
    const x = width / 2 + (i * 0.5);
    const y = height / 2 + (i * 0.5);
    fishes.push(new fishAgent(allFish, x, y, random(0.3, 0.7), random(0, 360)));
  }

  // list of lilypads
  for (i = 0; i < 10; i++) {

    var x = random(0, width);
    var y = random(0, height);
    var size = random(100, 300);
    var speed = random(0.05, 0.1);
    var angle = random(0.00, 360.00);
    var flower = random([0, 1, 2]);
    var flowersize = size / 1.5;
    displaylilypads.push(new lilypadAgent(flowerimg, random(alllilypads), x, y, size, speed, angle, flower, flowersize));
  }

  // list of ripples
  for (i = 0; i < 20; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let strokeweight = random([0.3, 3.5]);
    ripples.push(new rippleAgent(x, y, strokeweight));
  }

  sound.play();
  sound.setLoop(true);

}





function draw() {
  background(51);

  // create a gradient for the top and bottom
  let topgrad = color(110, 212, 240);
  let botgrad = color(48, 155, 255);

  // lerp to get a colour between
  for (y = 0; y < height; y++) {
    // draw a line with said colour
    stroke(lerpColor(topgrad, botgrad, y / height));
    line(0, y, width, y);
  }



  for (let fish of fishes) {
    fish.show();
    fish.animate();
  }

  // ripples
  for (let ripple of ripples) {
    ripple.show();
    ripple.grow();
    ripple.fade();
  }

  if ((frameCount % 540 == 0) || (frameCount % 1200 == 0)) {

    var size = random(100, 300);

    if (frameCount % 540 == 0) {
      var x = random(-height, width - size / 2);
      var y = -size;
    }
    else {
      var x = -size;
      var y = random(-size, height - size);
    }
    
    var speed = random(0.05, 0.1);
    var angle = random(0.00, 360.00);
    var flower = random([0, 1, 2]);
    var flowersize = size / 1.5;
    displaylilypads.push(new lilypadAgent(flowerimg, random(alllilypads), x, y, size, speed, angle, flower, flowersize));
  }
  
  for (let lilypad of displaylilypads) {
    lilypad.show();
  }
  
}

