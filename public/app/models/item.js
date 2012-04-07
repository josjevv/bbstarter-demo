define([
  'use!underscore',
  'use!backbone'
], function(_, Backbone) {
  var Item = Backbone.Model.extend({
    url: function () {
      return 'http://localhost:7000/items.json'
    },

    defaults: {
    },

    initialize: function(){
    }

  });

  return Item;
});
