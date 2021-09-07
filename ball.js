class Ball{
    constructor(x,y,w,h,angle){

        var option = {

            density:1,
            frictionAir:0.005,
        }
        this.body = Bodies.rectangle(x,y,w,h,option)
        this.w = w
        this.h = h
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position
        var angle = this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        fill("violet")
        ellipse(0,0,this.w,this.h)
        pop()
    }
}