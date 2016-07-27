var express = require('express')
var app = express()
var fs = require('fs')
var filename = "./index.html"


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, resp) {
    var text = fs.readFileSync(filename, "utf8", function(err, data)) 
        resp.send(text);
    
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
