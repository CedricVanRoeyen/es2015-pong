import GLOBALVARS from "../GLOBALVARS";

const canvas = document.createElement("canvas");
canvas.height = GLOBALVARS.canvasHeight;
canvas.width = GLOBALVARS.canvasWidth;
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

ctx.fillStyle = "white";

//setting canvas decoration

export default canvas;
export default ctx;
