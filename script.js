/script.js
// Stato del gioco
let currentTurn = 0;
const maxTurns = 4;
let sentenceParts = [];

// Elementi della UI
const input = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const instructions = document.getElementById("instructions");
const gameDiv = document.getElementById("game");
const resultDiv = document.getElementById("result");
const finalPhrase = document.getElementById("finalPhrase");

// Istruzioni per ogni turno
const turnInstructions = [
  "Chi? (es. 'Mario')",
  "Cosa fa? (es. 'mangia')",
  "Dove? (es. 'nel parco')",
  "Quando? (es. 'di notte')"
];

// Mostra la prima istruzione
instructions.textContent = turnInstructions[currentTurn];

// Azione al clic su "Invia"
submitBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  // Salva la parte scritta
  sentenceParts.push(text);
  input.value = "";
  currentTurn++;

  // Avanza al turno successivo o mostra la frase
  if (currentTurn < maxTurns) {
    instructions.textContent = turnInstructions[currentTurn];
  } else {
    const [chi, cosaFa, dove, quando] = sentenceParts;
    const fraseFinale = ${chi} ${cosaFa} ${dove} ${quando}.;

    gameDiv.style.display = "none";
    resultDiv.style.display = "block";
    finalPhrase.textContent = fraseFinale;
  }
});
