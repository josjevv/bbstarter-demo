define([
    'jquery'
  , 'use!underscore'
  , 'use!backbone'
  , 'mustache'
  , 'text!templates/bootstrap/alert.mustache'
  , 'text!templates/bootstrap/modal.mustache'
], function ($, _, Backbone, Mustache, alertTpl, modalTpl) {

  var Bootstrap = {};

  Bootstrap.alert = Backbone.View.extend({
    render: function (text) {
      var compiledTemplate = Mustache.render(alertTpl, {text: text} )
      $(this.el).prepend(compiledTemplate)
      return this.el
    }
  })

  Bootstrap.modal = Backbone.View.extend({
    render: function (object) {
      var compiledTemplate = Mustache.render(modalTpl, object)
      $(this.el).prepend(compiledTemplate)
      return this.el
    }
  })

  return Bootstrap

})
