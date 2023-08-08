function spiral(quiz9) {
    var arr = [];
    var col = 0;
    var row = 0;
    var colEnd = quiz9 - 1 ;
    var rowEnd = quiz9 - 1 ;
    var tampung = 0;

    for(let h = 0; h < quiz9; h++) {
        arr.push([]);
    }
    
    for(let i = 0; i < quiz9; i++) {
        for(let j = 0; j < quiz9; j++){
            arr[i][j] = tampung;
            tampung++;
        }
    }
    let bungkus = [];
    while(col <= colEnd && row <= rowEnd) {

        for(let i = col; i <= colEnd; i++) {
            bungkus.push(arr[row][i])
        }
        row++;

        
        for(let i = row; i <= rowEnd; i++) {
            bungkus.push(arr[i][colEnd])
        }
        colEnd--;

        if(row <= rowEnd)   
        for(let i = colEnd; i >= col; i--) {
            bungkus.push(arr[rowEnd][i])
        }
        rowEnd--;

        if(col <= colEnd) {
            for(let i = rowEnd; i >= row; i--) {
            bungkus.push(arr[i][col])
            }
        col++;
        }
    }
    return bungkus;
}

console.log(spiral(5))
console.log(spiral(6))
console.log(spiral(7))

