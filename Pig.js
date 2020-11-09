class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }
    else{
      //removing the pig from the world if the speed is over 3
      World.remove(world, this.body);

      //to make the pig fade away but using push and pop so that the fade effect does nt effect the other objects in the game
      push();
      this.Visibility = this.Visibility-5;
      tint(255, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();  
    }
  }
};