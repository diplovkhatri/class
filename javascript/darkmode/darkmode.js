let light = true;
function darkmode() {
  if (light) {
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black";
    light = false;
    document.querySelector("button").innerHTML = "turn off";
  } else {
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "white";
    light = true;
    document.querySelector("button").innerHTML = "turn on";
  }
}
