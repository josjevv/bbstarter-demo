define([
  'use!underscore',
  'use!backbone'
], function(_, Backbone) {
  var Item = Backbone.Model.extend({
    urlRoot: function () {
      return 'api/items/'
    },

    idAttribute: '_id',

    defaults: {
    },

    initialize: function(){
    }

  });

  return Item;
});
