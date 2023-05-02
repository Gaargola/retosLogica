function spinWords(string){
  let words = string.split(" "); // separa la cadena de entrada en palabras
  for(let i = 0; i < words.length; i++){
    if(words[i].length >= 5){
      words[i] = words[i].split("").reverse().join(""); // revierte la palabra
    }
  }
  return words.join(" "); // une las palabras para crear la cadena de salida
}

let a = "Hola esto es un text";
let b = "Hey fellow warriors";

console.log(spinWords(a)); // muestra "Hola esto es un text"
console.log(spinWords(b)); // muestra "Hey wollef sroirraw"function spinWords(string) {



function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}