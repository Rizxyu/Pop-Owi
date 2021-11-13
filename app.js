const popowi = document.querySelector('#popowi');
const btn = document.querySelector('#btn');
let skor = document.querySelector('#counter')
let score = Number(localStorage["score"]) || 0;
const kaget = "./image/kaget.png";
const gaKaget = "./image/gakaget.png";

const suaraKaget = new Audio("./sound/woh.mp3");

btn.addEventListener("mousedown", loncat);
btn.addEventListener("mouseup", gaLompat);

skor.innerHTML = score;

function loncat(){
  tambahScore();
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

btn.addEventListener("touchstart", function(e){
  e.preventDefault();
  loncat();
})
btn.addEventListener("touchend", function(e){
  e.preventDefault();
  gaLompat();
})
