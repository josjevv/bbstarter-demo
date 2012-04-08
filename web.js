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

// logger
app.use(express.logger(':method :url :status'))

/*
 *  Express Routing
 */

app.param('itemId', function (req, res, next, itemId) {
  var Item = mongoose.model('Item')
  Item.findOne({_id : itemId }, function (err, item) {
    if (err) return next(err)
    if (!item) return next(new Error('Could not find the Item'))
    req.item = item
    next()
  })
})

// create item
app.post('/api/items', function (req, res) {
  var Item = mongoose.model('Item')
    , item = new Item(req.body)

  item.save(function (){
    res.json(item, 201)
  })
})

// list items
app.get('/api/items/', function (req, res) {
  var Item = mongoose.model('Item')

  Item
    .find({})
    .run(function (err, items) {
      res.json(items)
    })
})

// show item
app.get('/api/items/:itemId', function (req, res) {
  res.json(req.item)
})

// update item
app.put('/api/items/:itemId', function (req, res) {
  var item = req.item
  item.name = req.body.name
  item.price = req.body.price
  item.save(function (err) {
    if (err) throw err
    console.log(err)
    res.send(204)
  })
})

// delete item
app.del('/api/items/:itemId', function(req, res){
  var item = req.item
  item.remove(function(err){
    if (err) res.json(err, 404)
    else res.send(204)
  })
})

// Start the server
var port = process.env.PORT || 3000

app.listen(port, function() {
  console.log("Listening on " + port)
});
