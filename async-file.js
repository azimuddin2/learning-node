const fs = require('fs');

// reading text asynchronously
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error('Error reading text')
    };
    console.log(data);

    // writeFile text asynchronously
    fs.writeFile('./texts/write.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error('Error writing data')
        }

        console.log('The file has been saved!');
    });

});