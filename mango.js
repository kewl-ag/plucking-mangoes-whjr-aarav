class Mango {
    constructor(x, y,r) {
   // super(x,y,width,height);


var options = {
isStatic : true

}

    this.image = loadImage("Plucking/mango.png");

    this.body = Matter.Bodies.circle(x,y,r,options);

    this.radius = r;

    World.add(world,this.body);


    }
    display(){
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var pos =this.body.position;
    //  var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      imageMode(CENTER);
     // strokeWeight(4);
     // stroke("brown");
     // fill(255);
      image(this.image,0, 0, this.radius, this.radius);
      pop();

    }
  };
  