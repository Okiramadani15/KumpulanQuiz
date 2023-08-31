const {readFile} = require('fs')

console.log(pertama)

readFile('datac.txt', 'utf-8', (err,data) => {
    if (err) return console.log(err)
    console.log(data)
})

console.log(terakhir)