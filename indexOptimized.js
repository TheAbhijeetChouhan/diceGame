
var dice1 = Math.floor((Math.random()*6)+1);
var dice2 = Math.floor((Math.random()*6)+1);


// images/dice1.png

var imgPath1 = "./images/dice" + dice1 + ".png"
var imgPath2 = "./images/dice" + dice2 + ".png"

console.log(imgPath1);

document.querySelector(".img1").src = imgPath1;
document.querySelector(".img2").src = imgPath2;

if(dice1 > dice2){
    document.querySelector("h1").textContent = "Player 1 Wins !!";
}
else if(dice2 > dice1){
    document.querySelector("h1").textContent = "Player 2 Wins !!";
}
else{
    document.querySelector("h1").textContent = "It's a draw !!";
}

