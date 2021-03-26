// start node.js server  code //


//end server code //

const translate = document.querySelectorAll('.translate');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset; 
    
    translate.forEach(element=> {
        let speed = element.dataset.speed; 
        element.style.transform = `translateY(${scroll * speed}px)`;  
    })
} )


const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('web.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})
server.listen(port, function(error) {
    if (error) {
        console.log('Something Went Wrong', error)
    } else {
        console.log('server is listening on port' + port)
    }
})