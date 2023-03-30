player1 = {
  score: 0,
  display: document.querySelector("#p1"),
  btn: document.querySelector("#plyBtn1"),
};
player2 = {
  score: 0,
  display: document.querySelector("#p2"),
  btn: document.querySelector("#plyBtn2"),
};

const plyBtn1 = document.querySelector("#plyBtn1");
const plyBtn2 = document.querySelector("#plyBtn2");
const resetBtn = document.querySelector(".resetBtn");

const pone = document.querySelector("#p1");
const ptwo = document.querySelector("#p2");

const sel = document.querySelector("#sel");
let value = sel.options.selectedIndex;

const h1 = document.querySelector("h1");

// let p1 = 0;
// let p2 = 0;

function updateScores(player, opponent) {
  console.log("clicked");
  if (value === 0) {
    alert("Please choose number of points.");
  } else {
    if (player.score < value && opponent.score < value) {
      player.score += 1;
      player.display.innerText = player.score;
    }
    if (player.score >= value && player.score > opponent.score) {
      player.btn.disabled = true;
      opponent.btn.disabled = true;
      player.display.classList.add("g");
      opponent.display.classList.add("r");
      player.btn.classList.add("inactive");
      opponent.btn.classList.add("inactive");
    }
    if (opponent.score >= value && opponent.score > player.score) {
      opponent.btn.disabled = true;
      player.btn.disabled = true;
      player.display.classList.add("r");
      opponent.display.classList.add("g");
      player.btn.classList.add("inactive");
      opponent.btn.classList.add("inactive");
    }
  }
}

player1.btn.addEventListener("click", function () {
  updateScores(player1, player2);
});
player2.btn.addEventListener("click", function () {
  updateScores(player2, player1);
});

resetBtn.addEventListener("click", () => {
  for (let player of [player1, player2]) {
    player.score = 0;
    player.display.innerText = 0;
    player.display.classList = [];
    player.btn.disabled = false;
    player.btn.classList = [];
  }
});

sel.addEventListener("change", () => {
  value = sel.options.selectedIndex;
  // for(let player of [player1, player2]){
  //   player.display.classList = [];
  //   player.btn.disabled = false;
  //   player.btn.classList = [];

  // }
  player1.display.classList = [];
  player2.display.classList = [];
  player1.btn.disabled = false;
  player2.btn.disabled = false;
  player1.btn.classList = [];
  player2.btn.classList = [];
});
