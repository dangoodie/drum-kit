var drumArray = document.querySelectorAll(".drum");
for (let index = 0; index < drumArray.length; index++) {
  drumArray[index].addEventListener("click", handleClick);
}

function handleClick() {
    this.style.color = "white";
}

    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();