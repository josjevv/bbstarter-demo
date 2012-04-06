define([
  'jquery',
  'underscore',
  'backbone',
  'collections/items',
  'mustache',
  'text!templates/items/list.mustache'

], function($, _, Backbone, itemsCollection, Mustache, itemListTemplate){
  var itemListView = Backbone.View.extend({
    el: $("#page"),
    events: {
        "click .add": "add"
    },

    initialize: function(){
      this.collection = itemsCollection;
      //this.collection.bind("add", this.exampleBind);
      //this.collection = projectsCollection.add({ name: "Twitter"});
      //this.collection = projectsCollection.add({ name: "Facebook"});
      //this.collection = projectsCollection.add({ name: "Myspace", score: 20});
    },

    exampleBind: function( model ){
      //console.log(model);
    },

    render: function(){
      var data = {
        items:  _.map(this.collection.models, function(v) { return v.toJSON(); })
      };

      var compiledTemplate = Mustache.render(itemListTemplate, data);
      $("#page").html( compiledTemplate );
    },
    add: function() {
      window.alert("Add");
    }
  });

  return new itemListView;
});
