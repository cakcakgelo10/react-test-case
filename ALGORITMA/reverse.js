function terbalik(str) {
    const huruf = str.replace(/\d/g, '');
    const angka = str.replace(/[a-zA-Z]/g, '');

    return huruf.split('').reverse().join('') + angka;
}

console.log(terbalik("NEGIE1"));
console.log(terbalik("azeR"));

