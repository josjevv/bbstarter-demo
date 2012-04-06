define([
  'jquery',
  'underscore',
  'backbone',
  'models/item'
], function($, _, Backbone, itemModel){
  var ItemsCollection = Backbone.Collection.extend({
    model: itemModel,
    url: "api/wines",
    initialize: function() {
    }

  });

  return ItemsCollection;
});
