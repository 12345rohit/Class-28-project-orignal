class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

//create the rectangular shaped body.
this.body=Bodies.rectangle(x,y, this.width,this.height);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
   
    rotate(angle);
    //imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
     translate(this.body.position.x,this.body.position.y);
    pop();
  }
}
