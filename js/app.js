// -- PRUEBA TECNICA CAROLINA URIBE BOTERO -- //

/* En un string que contiene caracteres arbitrarios y algunos paréntesis, donde los paréntesis se garantizan que están balanceados (es decir que el paréntesis que abre, siempre se cierra en algún punto), remover los paréntesis que encierran todo el string 

Ejemplos: 
"(abc)(def)" -> "(abc)(def)" 
 
"((abc)(def))" -> "(abc)(def)" 
 
"a(b)c" -> "a(b)c" 
 
Crear un método que retorne el string deseado.  explicar que desea la actividad */

function removeExternalParentheses(s) {
  // Verificar si la s comienza y termina con paréntesis
  if (s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
    // Contar el número de paréntesis abiertos y cerrados dentro de la s
    let count = 0;

    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "(") {
        count++;
      } else if (s.charAt(i) === ")") {
        count--;
      }
      // Si el conteo vuelve a cero, significa que se cerraron todos los paréntesis abiertos
      if (count === 0) {
        // Verificar si la s aún tiene paréntesis externos después de cerrar todos los paréntesis abiertos
        if (i !== s.length - 1) {
          // Devolver la s original si hay más paréntesis después de cerrar todos los paréntesis abiertos
          return s;
        } else {
          // Eliminar los paréntesis exteriores
          return s.slice(1, -1);
        }
      }
    }
  }

  // Devolver la s original si no está encerrada en paréntesis
  return s;
}

function balanceParentheses() {
  // Obtener el valor de entrada
  const inputString = document.getElementById("inputString").value;

  // Llama a la función para eliminar paréntesis externos
  const result = removeExternalParentheses(inputString);

  // Muestra el resultado en el div designado
  const resultBadge = document.getElementById("resultBadge");
  resultBadge.innerText = result;

  // Muestra la card solo si hay un resultado
  if (result) {
    resultBadge.classList.remove("d-none");
    resultBadge.classList.add("d-block");
  } else {
    resultBadge.classList.remove("d-block");
    resultBadge.classList.add("d-none");
  }
}

// Ejemplos de uso
/* console.log(removeExternalParentheses("(abc)(def)")); // "(abc)(def)"
console.log(removeExternalParentheses("((abc)(def))")); // "(abc)(def)"
console.log(removeExternalParentheses("a(b)c")); // "a(b)c" */
