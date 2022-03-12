//async callbacks

const {readFile, writeFile} = require('fs');
console.log('start')
readFile('./content/first.txt' , 'utf8',  (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/first.txt' , 'utf8',(err, result) =>{
        if (err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Hi ${first} and ${second}`, (err, result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with this task')
        })
    })
})
console.log('starting next one') //this is logged before the 'done with this task' - due to async 
