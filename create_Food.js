class Food{
    constructor(x,y,a,b,c){
      this.x=x;
      this.y=y;
      this.r=5;
      this.a=a;
      this.b=b;
      this.c=c;
    }
    eaten(x,y){
      let d=dist(x,y,this.x,this.y);
      if(d<10){
        return true;
      }else{
        return false;
      }
    }
    dataX(){
      return this.x;
    }
    dataY(){

      return this.y;
    }

    show(){
      fill(this.a,this.b,this.c);
      noStroke();
      rectMode(CENTER);
      circle(this.x,this.y,this.r);
    }
  }
  
  function createFood(a,l,r,g,b){
    for(let i=0;i<l;i++){
      let x1=random(10,width-10);
      let y1=random(10,height-10);
  
    a[i]=new Food(x1,y1,r,g,b);
    }
  }