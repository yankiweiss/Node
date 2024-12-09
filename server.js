const { error } = require('console');
const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n\nNice To Meet you!');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n\nNice To Meet you!');
    } catch (err) {
        console.log(err)
    }
}
/*fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8' ,(err, data) => {
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

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename Completed!')
        })
    })  
})

 

process.on('uncaughtException' , err => {
    console.error(` ${err}`);
    process.exit(1)
})*/

fileOps()