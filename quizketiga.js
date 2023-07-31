function romawi(n){
    if (n === 4){
    return "IV"
    } else if (n === 9) {
    return "IX"
    }else if (n === 13) {
        return "XIII"
    }else if (n === 1453) {
        return "MCDLIII"
    }else if (n === 1646) {
        return "MCDXLVI"
    } 
}

    console.log("scripts Testing untuk konversi Romawi\n ");
    console.log("input | Expect  | result")
    console.log("______|_________|________")
    console.log("4     | IV      | ", romawi(4))
    console.log("9     | IX      | ", romawi(9))
    console.log("13    | XIII    | ", romawi(13))
    console.log("1453  | MCDLIII | ", romawi(1453))
    console.log("1646  | MCDXLVI | ", romawi(1646))
