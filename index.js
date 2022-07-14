var drumArray = document.querySelectorAll(".drum");
for (let index = 0; index < drumArray.length; index++) {
  drumArray[index].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked");
}
