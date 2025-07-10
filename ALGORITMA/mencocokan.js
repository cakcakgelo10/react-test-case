function cocok(input, query) {
    return query.map(kataQuery => 
        input.filter(kataInput => kataInput === kataQuery).length
    );
}

console.log(cocok(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']));
