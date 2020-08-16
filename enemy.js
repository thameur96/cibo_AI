class Rectangle {
    constructor(x,y,r){
      this.x=x;
      this.y=y;
      this.r=r;

    }
    move(){
      this.x += random(-5,5);
      this.y += random(-5,5);
    }
    moveto(x,y){
      this.x=x;
      this.y=y;
    }
    dataX(){
        return this.x;
    }
    dataY(){
        return this.y;
    }
    eate(x,y,r){
      
      let d=dist(this.x,this.y,x,y);
      if (d<r){
        return true;
      }else{
        return false;
      }
    }
    
    
    show(){
      stroke(255);
      strokeWeight(4);
      noFill();
      rectMode(CENTER);
      rect(this.x,this.y,this.r,this.r);
      }
  }
  