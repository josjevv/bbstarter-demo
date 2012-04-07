define([
    'jquery'
  , 'use!underscore'
  , 'use!backbone'
  , 'collections/items'
  , 'mustache'
  , 'text!templates/items/list.mustache'
], function($, _, Backbone, Items, Mustache, itemListTemplate){

  // Create a item list
  var ItemsView = Backbone.View.extend({
      el: $('#page')
    , events: {
        'click .add': 'add'
      }
    , initialize: function(){
        this.collection = new Items
        this.collection.bind('reset', this.render, this);
        this.collection.fetch()
      }
    , render: function(){
        var data = {
          items:  _.map(this.collection.models, function(v) { return v.toJSON() })
        }

        var compiledTemplate = Mustache.render(itemListTemplate, data)
        $(this.el).html(compiledTemplate)
        return this
      }
    , add: function() {
        window.alert('Add')
      }
  })

  return ItemsView
})
