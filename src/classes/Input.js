var Input = {
  upArrow: 38,
  downArrow: 40,
  keyState: {}
};
document.addEventListener("keydown", function(evt) {
  Input.keyState[evt.keyCode] = true;
});

document.addEventListener("keyup", function(evt) {
  delete Input.keyState[evt.keyCode];
});

export default Input;
