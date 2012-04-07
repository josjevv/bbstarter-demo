define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'models/item'
], function($, _, Backbone, Item){
  var Items = Backbone.Collection.extend({
    model: Item,
    url: function () {
      return 'api/items/'
    },

    parse: function(response) {
      // Safety check ensuring only valid data is used
      return response
    },

    initialize: function() {
    }

  });

  return Items;
});
