var express = require('express')
  , app = express.createServer()
  , mongoose = require('mongoose')


/*
 *  Mongoose settings
 */
mongoose.connect('mongodb://heroku:heroku@flame.mongohq.com:27044/app3727899')
var ItemSchema = new mongoose.Schema({
  name: String,
  price: Number
})

mongoose.model('Item', ItemSchema);


/*
 *  Express middlewares and settings
 */

app.use(express.favicon())
app.use(express.static(__dirname + '/public'))

// bodyParser should be above methodOverride
app.use(express.bodyParser())
app.use(express.methodOverride())

// cookieParser should be above session
app.use(express.cookieParser())


/*
 *  Express Routing
 */

app.post('/api/items', function (req, res) {
  var Item = mongoose.model('Item')
    , item = new Item(req.body)

  item.save(function (){
    res.json(item)
  })
})


app.get('/api/items/', function (req, res) {
  var Item = mongoose.model('Item')

  Item
    .find({})
    .run(function (err, items) {
      res.json(items)
    })
})


var port = process.env.PORT || 3000

app.listen(port, function() {
  console.log("Listening on " + port)
});
