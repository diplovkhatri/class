let image = ["view4.jpg", "view5.jpg", "view6.jpg"];
let index = 0;
document
  .getElementById("sliderimg")
  .setAttribute("src", "./imageslider/" + image[index]);
function prev() {
  index--;
  if (index < 0) {
    index = image.length - 1;
  }
  document
    .getElementById("sliderimg")
    .setAttribute("src", "./imageslider/" + image[index]);
}
function nex() {
  index++;
  if (index == image.length) {
    index = 0;
  }
  document
    .getElementById("sliderimg")
    .setAttribute("src", "./imageslider/" + image[index]);
}
setInterval(nex, 4000);
