import canvas from "./classes/canvas";
import ctx from "./classes/canvas";
import Player from "./classes/Player";
import Paddle from "./classes/Paddle";
import Ball from "./classes/Ball";
import Input from "./classes/Input";
import GLOBALVARS from "./GLOBALVARS";

var player, ball, ai;

function main() {

  init();

  function loop() {
    ctx.clearRect(0, 0, 700, 600);
    update();
    draw();
    window.requestAnimationFrame(loop, canvas);
  }
  window.requestAnimationFrame(loop, canvas);
}

function init() {
  player = new Player(20, (GLOBALVARS.canvasHeight - 100)/2, 0);
  ai = new Paddle(GLOBALVARS.canvasWidth - (40), (GLOBALVARS.canvasHeight - 100)/2, 0);
  ball = new Ball((GLOBALVARS.canvasWidth - 20)/2, (GLOBALVARS.canvasHeight - 20)/2);
}

function update() {
  ball.update();
  player.update();
  ai.update();
}

function draw(){
  net();
  ball.draw();
  player.draw();
  ai.draw();
}

function net() {
  var w = 2;
  var x = (GLOBALVARS.canvasWidth - w) / 2;
  var y = 0;
  var step = GLOBALVARS.canvasHeight / 30;
  while(y < GLOBALVARS.canvasHeight) {
    ctx.fillRect(x, y+step*0.25, w, step*0.5);
    y += step;
  }
}


main();
