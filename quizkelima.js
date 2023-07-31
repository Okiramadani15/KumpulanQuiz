function quote (kata) {
   let penyebut = 'aiueo'
    if( penyebut.includes(kata.charAt(0)) === true ){
        console.log(kata)  
    }

        if (penyebut.includes(kata.charAt(0)) === false){
         console.log (kata.slice(1) + kata.charAt(0) + 'nyo')
    }        
}

quote ('ayam')
quote ('bebek')