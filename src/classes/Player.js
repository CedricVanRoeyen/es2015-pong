import Paddle from "./Paddle";
import Input from "./Input";
import GLOBALVARS from "../GLOBALVARS";

class Player extends Paddle {
  update() {
    this.movePlayer();
    this.collideWorldBounds();
  }

  movePlayer() {
    if (Input.keyState[Input.upArrow]) {
      this.velY = -this.speed;
    }
    else if(Input.keyState[Input.downArrow]) {
      this.velY = this.speed;
    }
    else this.velY = 0;

    this.y += this.velY;
  }

  collideWorldBounds() {
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.y + this.height >= GLOBALVARS.canvasHeight) {
      this.y = GLOBALVARS.canvasHeight - this.height;
    }
  }
}

export default Player;
