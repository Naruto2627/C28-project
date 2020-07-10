class Paper{
    constructor(){
        var options ={
            //isStatic :false,
            restitution :0.3,
            friction :0.5,
            density :1.5
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}