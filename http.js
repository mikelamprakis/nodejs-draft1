const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('Welcome to home page')
         res.end()
    }

    if (req.url === '/about'){
        res.write('Here is our short history')
        res.end()
    }

    res.write(`
    <h1>Opps!</h1>
    <p>We cant find your page</p>
    <a href="/">Go to homepage</a>
    `)
    res.end()
})

server.listen(5000);