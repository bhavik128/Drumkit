for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  var keyPressed = event.key;
  keySwitch(keyPressed);
  animation(keyPressed);
}

function handleClick() {
  var buttonClicked = this.innerHTML;
  keySwitch(buttonClicked);
  animation(buttonClicked);
}

function animation(Object) {
  var list = document.querySelector("." + Object).classList;
  list.add("pressed");
  setTimeout(function() {list.remove("pressed");},120);
}

function keySwitch(Object) {
  switch (Object) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
