class Dustbin{
    constructor(x,y,width,height){
        var Options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        var thickness = 35;
        
        this.bodyLeftWidth = thickness;
        this.bodyLeftHeight = height;
        this.bodyLeft = Bodies.rectangle(x-width/2+thickness/2, y, this.bodyLeftWidth, this.bodyLeftHeight, Options);

        this.bodyRightWidth = thickness;
        this.bodyRightHeight = height;
        this.bodyRight = Bodies.rectangle(x+width/2-thickness/2, y, this.bodyRightWidth, this.bodyRightHeight, Options);

        this.bodyBottomWidth = width-thickness*2;
        this.bodyBottomHeight = thickness;
        this.bodyBottom = Bodies.rectangle(x, y+height/2-thickness/2, this.bodyBottomWidth, this.bodyBottomHeight, Options);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/DustbinImage.png");

        World.add(world, this.bodyLeft);
        World.add(world, this.bodyRight);
        World.add(world, this.bodyBottom);
    }
    display(){
        // var posLeft = this.bodyLeft.position;
        // rect(posLeft.x,posLeft.y,this.bodyLeftWidth,this.bodyLeftHeight);

        // var posRight = this.bodyRight.position;
        // rect(posRight.x,posRight.y,this.bodyRightWidth,this.bodyRightHeight);

        // var posBottom = this.bodyBottom.position;
        // rect(posBottom.x,posBottom.y,this.bodyBottomWidth,this.bodyBottomHeight);
        
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}