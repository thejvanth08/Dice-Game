var randomNumber1 = Math.random() * 6; //0 to 0.5532523..
randomNumber1 = randomNumber1 + 1; // 1.45234..to 6.5235...
randomNumber1 = Math.floor(randomNumber1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
// make sure you don't have error in the js code because it won't run
var randomNumber2 = Math.random() * 6; //0 to 0.5532523..
randomNumber2 = randomNumber2 + 1; // 1.45234..to 6.5235...
randomNumber2 = Math.floor(randomNumber2);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One Wins🎉🎊";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two Wins🎉🎊";
} else {
  document.querySelector("h1").innerHTML = "Draw✌️";
}
