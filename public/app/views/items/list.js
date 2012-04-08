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
        'click .delete': 'deleteItem'
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
    , deleteItem: function (e) {
        e.preventDefault()
        var id = $(e.currentTarget).data("id")
        var item = this.collection.get(id)
        item.destroy({wait: true})
        this.collection.remove(item);
        $(e.target).closest('tr').remove()
      }
  })

  return ItemsView
})
