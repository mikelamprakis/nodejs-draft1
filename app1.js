console.log(__dirname); //gives the current location

// setInterval(()=>{
//     console.log("Hi there");
// }, 1000) //will run it every 1 sec

const john = 'john';

const sayHi = (name) =>{
    console.log(`Hello ${name}`)
}

//sayHi(john);


//console.log(module);

module.exports= {john, sayHi}