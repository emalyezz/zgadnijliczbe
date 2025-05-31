// Wylosuj liczbę od 1 do 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('resultMessage');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = "Wpisz poprawną liczbę od 1 do 10.";
        message.style.color = "orange";
    } else if (userGuess === secretNumber) {
        message.textContent = "🎉 Brawo! Zgadłeś!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Nie tym razem. Spróbuj ponownie!";
        message.style.color = "red";
    }
}
