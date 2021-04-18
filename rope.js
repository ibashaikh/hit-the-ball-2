class rope{
    constructor(bodyA, pointB){
       var options  = {
           bodyA : bodyA, 
           pointB : pointB,
           stiffness :0.04,
           length : 10

       }
       this.pointB = pointB
        this.rassi = Constraint.create(options)
        World.add(world, this.rassi)
        
    }
    fly(){
        this.rassi.bodyA =null;
    }
   display(){
       if(this.rassi.bodyA){
       var pointA = this.rassi.bodyA.position
       var pointB = this.pointB
       strokeWeight(5)
        stroke("red")
       line(pointA.x, pointA.y, pointB.x, pointB.y)
   }
}

}





