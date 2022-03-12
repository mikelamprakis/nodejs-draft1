//OS MODULE

const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user)

//metho returs the system uptime in seconds
console.log(`The system uptime is  ${os.uptime()} secs`)

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)