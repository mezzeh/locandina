let n = 10;
let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log(`Array: ${arr}`);
let max = searchMax(arr);
console.log(
  `l'elemento massimo dell'array ${arr} è ${arr[max]} in posizione ${max}`,
);
//ricerca massimo
function searchMax(array) {
  let max = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[max] < array[i]) max = i;
  }
  return max;
}
