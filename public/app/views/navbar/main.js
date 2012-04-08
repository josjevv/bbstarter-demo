// Filename: views/home/main
define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'mustache',
  'text!templates/navbar/navbar.mustache',

], function($, _, Backbone, Mustache, template){
  var NavBarView = Backbone.View.extend({
    el: $('#header'),
    events: {
      'click .nav li a': 'navbar_click'
    },
    render: function() {
      var compiledTemplate = Mustache.render(template, { });
      $(this.el).html(compiledTemplate);
      return this.el
    },


    /*
     *  Event actions
     */

    navbar_click: function (e) {
      $('.nav li a').each(function (index, element) {
        $(element).parent().removeClass('active')
      })
      $(e.target).parent().addClass('active')
    }

  });

  return NavBarView;
});
