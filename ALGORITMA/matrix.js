function diagonal(matrix) {
    let totalSelisih = 0;
    for (let i = 0; i < matrix.length; i++) {
        totalSelisih += matrix[i][i] - matrix[i][matrix.length - 1 - i];
    } 
    return Math.abs(totalSelisih);
}

console.log(diagonal([[1, 2, 0], [4, 5, 6], [7, 8, 9]]));
