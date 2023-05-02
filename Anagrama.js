// Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
// * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
//* NO hace falta comprobar que ambas palabras existan.
//* Dos palabras exactamente iguales no son anagrama.

function solution(string1, string2) {
  let arr = string1.split("").sort().join("");
  console.log(arr);
  let arr2 = string2.split("").sort().join("");
  console.log(arr2);

  return arr === arr2;
}

solution("roma", "amor");
