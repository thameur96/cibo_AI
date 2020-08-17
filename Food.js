class Food {
  constructor(x, y, size, red, green, blue) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  dataX() {
    return this.x;
  }

  dataY() {
    return this.y;
  }

  eaten(x, y) {
    let d = dist(x, y, this.x, this.y);

    if(d < 5)
      return true;
    else
      return false;
  }

  show() {
    fill(this.red, this.green, this.blue);
    noStroke();
    rectMode(CENTER);
    circle(this.x, this.y, this.size);
  }
}

function createFood(name, qnt, size, red, green, blue) {
  for(let i = 0; i < qnt; i ++) {

    name[i] = new Food(
      random(10, width - 10),
      random(10, height - 10),
      size, red, green, blue);
  }
}
