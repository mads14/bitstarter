var express = require('express')
var app = express()
var fs = require('fs')
var filename = "./index.html"


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, resp) {
    resp.writeHead(200, {
        "Content-Type": "text/html"
    });
    fs.readFileSync(filename, "utf8", function(err, data) {
        if (err) throw err;
        resp.send(data);
        resp.end();
    });


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
