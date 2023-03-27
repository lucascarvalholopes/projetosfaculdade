// Adicionar evento de clique em cada carta
const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let timer = 60;
let countdown;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // Primeira carta virada
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // Segunda carta virada
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.city === secondCard.dataset.city;

  if (isMatch) {
    disableCards();
    score += 10;
    document.getElementById("score").textContent = score;
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function startGame() {
  countdown = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = timer + " segundos";

    if (timer <= 0) {
      clearInterval(countdown);
      alert("Fim do jogo! Sua pontuação final é: " + score);
    }
  }, 1000);

  shuffleCards();
  cards.forEach((card) => card.classList.remove("flip"));
  score = 0;
  document.getElementById("score").textContent = score;
}

function shuffleCards() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
}

cards.forEach((card) => card.addEventListener("click", flipCard));
document.getElementById("start-button").addEventListener("click", startGame);
