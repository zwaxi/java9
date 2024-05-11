let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let wordsWithN = [];
let wordsWithoutN = [];

for (let i = 0; i < letterSearch.length; i++) {
    if (letterSearch[i].includes('n')) {
        wordsWithN.push(letterSearch[i]);
    } else {
        wordsWithoutN.push(letterSearch[i]);
    }
}

console.log("So'zlar n harfi bilan:", wordsWithN);
console.log("So'zlar n harfi bilan emas:", wordsWithoutN);