define([
  'use!underscore',
  'use!backbone'
], function(_, Backbone) {
  var Item = Backbone.Model.extend({
    url: function () {
      return 'api/items'
    },

    defaults: {
    },

    initialize: function(){
    }

  });

  return Item;
});
