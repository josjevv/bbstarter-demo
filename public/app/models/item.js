define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ItemModel = Backbone.Model.extend({
    urlRoot: "api/items",
    defaults: {
      price: 10
    },
    initialize: function(){
    }

  });

  return ItemModel;
});
