const { error } = require('console');
const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8' ,(err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

console.log('Hello....')

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to Meet You', (err) => {
    if (err) throw err;
    console.log('Wrtie Completed!')

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is!', (err) => {
        if (err) throw err;
        console.log('Append Completed!')
    })
})

 

process.on('uncaughtException' , err => {
    console.error(` ${err}`);
    process.exit(1)
})