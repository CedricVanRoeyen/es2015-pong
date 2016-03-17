import ctx from "./canvas";
import GOBALVARS from "../GLOBALVARS";

export default class Ball{
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.side = 20;
    this.velX = null;
    this.velY = null;
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;
  }
}
