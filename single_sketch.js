// Single-sketch example
let cirs1=[];
let enemy;
let dists=[];





function setup (){
  createCanvas (300, 300);

  createFood(cirs1,100,0,255,0);//verde
  enemy= new Rectangle(150,150,10);
  frameRate(1);

}

function compara(a,b){
  return a-b;
}

function draw(){
  let dis=[];
  background(100);
  for(let cir of cirs1){
    cir.show();
  }

  enemy.show();

  for(let i=0;i<cirs1.length;i++){
    if(cirs1[i].eaten(enemy.dataX(),enemy.dataY())){
    cirs1.splice(i,1);
    }
  }
  for(let i=0;i<cirs1.length;i++){
    let d=dist(enemy.dataX,enemy.dataY,cirs1[i].dataX,cirs1[i].dataY);
    dists[i].push(d);
    console.log(dists);
  }



}
  









  


