const PARTICLES = 200;
const AROS = false;

var circles = [];


function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  background(32);
  
  noStroke();
  circles.push(new Circle(width / 2 - 250, height / 2 - 100, [0, 255, 255]));
  circles.push(new Circle(width / 2, height / 2 - 100, [255, 255, 255]));
  circles.push(new Circle(width / 2 + 250, height / 2 - 100, [255, 0, 0]));
  circles.push(new Circle(width / 2 - 125, height / 2 + 100, [255, 255, 0]));
  circles.push(new Circle(width / 2 + 125, height / 2 + 100, [0, 255, 0]));
}

function draw() {
  background(32, 160);
  for (let circle of circles){
    circle.actualize();
    circle.show();
  }
  if(mouseIsPressed){
    circles[floor(random(5))].addPrt({x: mouseX, y: mouseY});
  }
}

class Circle{
  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.r = 100;
    this.state = this.r = random(135, 165);
    this.rockets = [];
    for(let i = 0; i < PARTICLES; i++){
      this.rockets.push(new Rocket(this));
    }
  }
  actualize(){
    this.state--;
    if(this.state <= 0){
      this.state = random(30);
      this.r = random(135, 165);
    }
  }
  addPrt(pos){
    this.rockets.push(new Rocket(this, pos));
  }
  show(){
    if(AROS){
      stroke(this.color[0], this.color[1], this.color[2]);
      noFill();
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
      noStroke();
    }

    fill(this.color[0], this.color[1], this.color[2]);
    for(let rocket of this.rockets){
      rocket.actualize();
      rocket.show();
    }
  }
}
