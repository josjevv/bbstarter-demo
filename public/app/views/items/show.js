define([
    'jquery'
  , 'use!underscore'
  , 'use!backbone'
  , 'models/item'
  , 'mustache'
  , 'text!templates/items/show.mustache'
], function($, _, Backbone, Item, Mustache, itemShowTemplate){
  var app = new Backbone.Router;

  var ItemView = Backbone.View.extend({
      el: $('#page')
    , events: {
        'click .delete': 'deleteItem'
      }
    , initialize: function(){
        this.model = new Item({_id: this.options.model.id})
        this.model.bind("change", this.render, this)
        this.model.fetch()
      }
    , render: function(){
        var item = this.model.attributes
        var compiledTemplate = Mustache.render(itemShowTemplate, item)
        $(this.el).html(compiledTemplate)
        return this
      }
    , deleteItem: function(e) {
        e.preventDefault()
        //var id = $(e.currentTarget).data("id")
        //var item = this.collection.get(id)
        this.model.destroy({wait: true})
        //this.collection.remove(item);
        //$(e.target).closest('tr').remove()
        app.navigate('items', {trigger: true, replace: true})
      }
  })

  return ItemView
})
