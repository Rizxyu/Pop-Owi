const popowi = document.querySelector('#popowi');
const btn = document.querySelector('#btn');
let skor = document.querySelector('#counter')
let score = Number(localStorage["score"]) || 0;
const kaget = "./image/kaget.png";
const gaKaget = "./image/gakaget.png";

const suaraKaget = new Audio("./sound/woh.mp3");
const RickRoll = new Audio("./sound/rickroll.mp3");

btn.addEventListener("mousedown", loncat);
btn.addEventListener("mouseup", gaLompat);

skor.innerHTML = score;

function loncat(){
  tambahScore();
  rick();
  popowi.src = kaget;
  suaraKaget.play();
}
function gaLompat(){
  popowi.src = gaKaget;
}
function tambahScore(){
  score++;
  skor.innerHTML = score;
  localStorage["score"] = score;
}
function rick(){
  if((score*1) == 500) {
    alert(":v");
    RickRoll.play();
  }
}

btn.addEventListener("touchstart", function(e){
  e.preventDefault();
  loncat();
})
btn.addEventListener("touchend", function(e){
  e.preventDefault();
  gaLompat();
})
