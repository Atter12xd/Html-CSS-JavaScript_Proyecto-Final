// Generar un número aleatorio entre 1 y 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM que necesitamos
var guessInput = document.getElementById("guessInput");
var result = document.getElementById("result");

// Inicializar el número de intentos restantes y el historial de intentos
var remainingGuesses = 10;
var guessHistory = [];

// Función que se llama cuando el usuario hace clic en el botón "Adivinar"
function guess() {
  // Obtener el valor del campo de entrada
  var userGuess = parseInt(guessInput.value);

  // Validar que se ha introducido un número válido
  if (isNaN(userGuess)) {
    result.innerHTML = "Por favor, introduce un número válido.";
    return;
  }

  // Restar un intento y añadir el intento al historial
  remainingGuesses--;
  guessHistory.push(userGuess);

  // Comprobar si el número es correcto
  if (userGuess === randomNumber) {
    result.innerHTML = "¡Felicidades! Has adivinado el número en " + guessHistory.length + " intentos.";
    guessInput.disabled = true;
  } else if (remainingGuesses === 0) {
    result.innerHTML = "Lo siento, no has adivinado el número en 10 intentos. El número era " + randomNumber + ".";
    guessInput.disabled = true;
  } else {
    // Comprobar si el número es demasiado alto o demasiado bajo
    var message = userGuess < randomNumber ? "Demasiado bajo" : "Demasiado alto";
    result.innerHTML = message + ". Te quedan " + remainingGuesses + " intentos.";
  }
}
