class Box {
   constructor(x,y,w,h){

    var option = {

        friction:1.0,
        restitution:0.8,
        density:0.04
    }
    this.body = Bodies.rectangle(x,y,w,h,option)

    this.w = w
    this.h = h
    World.add(world,this.body);
   }

   display(){
       var position = this.body.position
       var angle = this.body.angle
       push()
       translate(position.x,position.y);
       rotate(angle)
       rectMode(CENTER)
       fill("pink")
       strokeWeight(4);
       stroke("yellow")
       rect(0,0,this.w,this.h)
       pop()
   }

}