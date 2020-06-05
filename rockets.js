class Rocket{
  constructor(circle, pos){
    this.circle = circle;
    if(pos){this.pos = pos}
    else {this.pos = {x: random(width), y: random(height)};}
    this.vel = {x: random(-20, 20), y: random(-20, 20)};
    this.angle = random(2*PI);
    this.obj = {x: circle.r*cos(this.angle) + width/2, y: circle.r*sin(this.angle) + height/2};
    this.acc = this.vect(this.pos, {x: circle.r*cos(this.angle) + width/2, y: circle.r*sin(this.angle) + height/2}, 7);
    //this.fric = random(0.97,0.99);
    this.fric = 0.99;
  }
  actualize(){
    //this.obj = {x: this.circle.r*cos(this.angle) + this.circle.x, y: this.circle.r*sin(this.angle) + this.circle.y};
    if(keyIsPressed){this.obj = {x: mouseX, y: mouseY};}
    else{this.obj = {x: this.circle.r*cos(this.angle) + this.circle.x, y: this.circle.r*sin(this.angle) + this.circle.y};}
    this.acc = this.vect(this.pos, this.obj, 1);
    this.vel = this.myAdd(this.acc, this.vel);
    this.pos = this.myAdd(this.vel, this.pos);
  }
  show(){
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
  vect(pos1, pos2, size){
    let module = sqrt((pos2.x-pos1.x)*(pos2.x-pos1.x) + (pos2.y-pos1.y)*(pos2.y-pos1.y));
    return({x: (pos2.x-pos1.x) / module * size, y: (pos2.y-pos1.y) / module * size});
  }
  myAdd(v1, v2){
    return({x: (v1.x + v2.x)*this.fric, y: (v1.y + v2.y)*this.fric});
  }
}
