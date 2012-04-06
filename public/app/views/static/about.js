// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/static/about.mustache'
], function($, _, Backbone, Mustache, template){
  var aboutView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
    },
    render: function(){
      var data = {};
      var compiledTemplate = _.template( template, data );
      this.el.html( compiledTemplate );
    }

  });

  return new aboutView;
});
