function quote (kata) {
   let penyebut = 'aiueo'
    if( penyebut.includes(kata[0]))console.log(kata)  
    else console.log (`${kata.slice(1)}${kata[0]}nyo`)        
}

quote ('ayam')
quote ('bebek')