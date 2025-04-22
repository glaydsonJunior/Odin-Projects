

const http = require('http')
const render = require('fs')


const hostname = '127.0.0.1';
const port = 3000;

function route(path){
    switch(path){
        case '/':
            return {template:'./index.html', statusCode: 200}
        case '/about':
            return {template:'./about.html', statusCode: 200}
        case '/contact-me':
            return {template:'./contact-me.html', statusCode: 200}
        default:
            return {template:'./404.html', statusCode: 404}
    }
}


const server = http.createServer((req, res) => {
    const act = route(req.url)
    
    render.readFile(act.template, function(err, data){
        res.writeHead(act.statusCode, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    });

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
