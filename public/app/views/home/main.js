// Filename: views/home/main
define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'mustache',
  'text!templates/home/main.mustache',
  'bootstrap'
], function($, _, Backbone, Mustache, template){

  $('.content').tooltip({
    selector: "a[rel=tooltip]"
  })

  var MainHomeView = Backbone.View.extend({
    el: $('#page'),
    render: function() {
      var compiledTemplate = Mustache.render(template, { });
      $(this.el).html(compiledTemplate);
      return this
    }
  });

  return MainHomeView;
});
