const fs = require('fs');

// reading a file text
const readText = fs.readFileSync('./texts/read.txt', 'utf-8');

// writing a text
const writingText = fs.writeFileSync('./texts/write.txt', readText, + 'This is my write text');

console.log(writingText);