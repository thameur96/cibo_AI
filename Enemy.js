class Enemy {
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

  getColor() {
    return this.red, this.green, this.blue;
  }

  moveRandomly() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    stroke(this.red, this.green, this.blue);
    strokeWeight(4);
    noFill();
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}
