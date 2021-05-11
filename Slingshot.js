class Slingshot {
    constructor(BodyA,PointB) {
        var Options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness:0.05,
            length:100
        }
        this.PointB = PointB;
        this.Slingshot = Constraint.create(Options);
        World.add(world,this.Slingshot);
    }
    fly(){
        this.Slingshot.bodyA = null;
    }
    display(){
        if(this.Slingshot.bodyA){
            var PointA = this.Slingshot.bodyA.position;
            var PointB = this.PointB;
            strokeWeight(5);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
        }
    }
}