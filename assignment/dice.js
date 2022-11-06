let dice = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

let dice1 = Math.ceil(Math.random() * 6);
document.getElementById("d1").setAttribute("src", "./image/" + dice[dice1]);
let dice2 = Math.ceil(Math.random() * 6);
document.getElementById("d2").setAttribute("src", "./image/" + dice[dice2]);

if (dice1 > dice2) {
  document.getElementById("win").innerHTML = "player 1 wins";
} else if (dice1 < dice2) {
  document.getElementById("win").innerHTML = "player 2 wins";
} else {
  document.getElementById("win").innerHTML = "players are in draw";
}
