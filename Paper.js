class Paper{
    constructor(x,y,radius){
        var Options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,Options);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("sprites/PaperImage.png")
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,(this.radius*2)+30,(this.radius*2)+30);
        pop();
    }
}