const prompt = require('prompt-sync')({sigint: true});

console.log("Rumus akar pangkat 2")

const angka = prompt('Masukan angka: ');

var Akar;

if(angka<0){
    Akar = console.log("Tidak bisa input bilangan negatif")

} else if(angka%2 !=0) {
    Akar = console.log("Tidak bisa input bilangan ganjil")

} else {
    Akar = Math.sqrt(angka)
    console.log("Akar pangkat 2 dari " + angka, "= " + Akar)
}

