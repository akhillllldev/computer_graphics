// Akhil Surendran 17BCE7087

var angle = 0;
var fish;
var hide;

function preload() {
  hide = loadImage('13004_Bicolor_Blenny_v1_diff.jpg');
  fish = loadModel('13007_Blue-Green_Reef_Chromis_v2_l3.obj');
}

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  translate(0,170,0);
  scale(0.3);
  rotateY(angle);
  texture(hide);
  model(fish);
  angle += 0.03;
}
