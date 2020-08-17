let canvas_size = 300;
let enemy_white;
let enemy_black;
let enemy_random_posX = Math.floor(Math.random() * canvas_size);
let enemy_random_posY = Math.floor(Math.random() * canvas_size);
let food_red = [];
let food_green = [];
let food_blue = [];

function setup() {

  createCanvas(canvas_size, canvas_size); // DIM X, DIM Y
  createFood(food_red, 50, 5, 200, 0, 0); // Name, QNT, Red, Green, Blue
  createFood(food_green, 100, 5, 0, 200, 0); // Name, QNT, Red, Green, Blue
  createFood(food_blue, 150, 5, 0, 0, 200); // Name, QNT, Red, Green, Blue
  enemy_white = new Enemy(enemy_random_posX, enemy_random_posY, 10, 255, 255, 255); // Name, X, Y, Size, Red, Green, Blue
  enemy_black = new Enemy(enemy_random_posX, enemy_random_posY, 10, 0, 0, 0); // Name, X, Y, Size, Red, Green, Blue
  frameRate(5);
}

function WhosNext(enemy, food){

  let food_distance;
  let food_closest; // Optional
  let food_closest_index;
  let shortest_distance;

  for(let i = 0; i < food.length; i ++) {
    food_distance = dist(
      enemy.dataX(),
      enemy.dataY(),

      food[i].dataX(),
      food[i].dataY())

    shortest_distance = Math.min(food_distance);

    if(shortest_distance < food_closest || food_closest == null){
      food_closest = shortest_distance; // Optional
      food_closest_index = i;
    }

    console.log("Color -> " + enemy.getColor(), {i, food_closest_index, shortest_distance, food_closest});
  }

  return food_closest_index;
}

function EatFood(enemy, food) {

  let next = 0;

  next = WhosNext(enemy, food);
  enemy.moveTo(food[next].dataX(), food[next].dataY())

  if(food[next].eaten(enemy.dataX(), enemy.dataY()))
    food.splice(next, 1);
}

function draw() {

  background(100);
  for(let food of food_red) {
    food.show();
  }
  for(let food of food_green) {
    food.show();
  }
  for(let food of food_blue) {
    food.show();
  }

  enemy_white.show();
  enemy_black.show();

  //White
  if(food_green[0] != null)
    EatFood(enemy_white, food_green);
  else
    console.log("Black stops eating");

  //Black
  if(food_red[0] != null)
    EatFood(enemy_black, food_red);
  else if (food_green[0] != null) {
    console.log("Red food has ended");
    EatFood(enemy_black, food_green);
  }
  else if (food_blue[0] != null){
    console.log("Green food has ended");
    EatFood(enemy_black, food_blue);
  }
  else {
    console.log("Blue food has ended");
    console.log("Black stops eating");
  }

  console.log({food_green});
}
