import Paddle from "./Paddle";
import Input from "./Input";

class Player extends Paddle {
  update() {
    if (Input.keyState[Input.upArrow]) {
      this.speed = -5;
    }
    else if(Input.keyState[Input.downArrow]) {
      this.speed = 5;
    }
    else this.speed = 0;

    this.y += this.speed;
  }
}

export default Player;
