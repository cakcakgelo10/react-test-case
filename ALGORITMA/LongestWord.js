function KalimatPanjang(sentence) {
    const panjang = sentence.split(' ').reduce((a, b) => 
        a.length > b.length ? a : b
);
return `${panjang}: ${panjang.length} karakter`;
}

console.log(KalimatPanjang("Saya sedang mencari pekerjaan"));
