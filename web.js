var express = require('express')
  , app = express.createServer()

app.use(express.favicon())
app.use(express.static(__dirname + '/public'))

var port = process.env.PORT || 3000

app.listen(port, function() {
  console.log("Listening on " + port)
});
