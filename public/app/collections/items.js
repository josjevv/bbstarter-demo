define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'models/item'
], function($, _, Backbone, Item){
  var Items = Backbone.Collection.extend({
    model: Item,
    url: function () {
      return 'http://localhost:7000/items.json/'
    },

    parse: function(response) {
      // Safety check ensuring only valid data is used
      return response.items
    },

    initialize: function() {
    }

  });

  return Items;
});
