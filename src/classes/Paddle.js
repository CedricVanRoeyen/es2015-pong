import canvas from "./canvas"
import ctx from "./canvas";
import GLOBALVARS from "../GLOBALVARS";

export default class Paddle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 100;
    this.speed = speed;
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.y += this.speed;
  }
}
