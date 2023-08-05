function pola(str) {
    let arrNum = str.split(" ");
    let numMax = [];
  
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (arrNum[0].replace("#", j) * arrNum[2] == arrNum[4].replace("#", k)) {
          numMax.push(j, k);
        }
      }
    }
    return numMax;
  }
  
  console.log(pola("42#3 * 188 = 80#204"));
  console.log(pola("8#61 * 895 = 78410#5"));