define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'mustache',
  'text!templates/items/edit.mustache'

], function($, _, Backbone, Mustache, template){
  var ItemEditView = Backbone.View.extend({
    el: $('#page'),
    events: {
      'submit #new-item': 'saveItem'
    },

    initialize: function(){
      this.model.bind('change', this.render, this)
    },

    render: function(){
      var compiledTemplate = Mustache.render(template, this.model.toJSON() )
      $(this.el).html(compiledTemplate)
      return this
    },

    saveItem: function(e) {
      e.preventDefault()
      window.alert('Save')

      this.model.set({
        name: $('#itemName').val(),
        price: $('#itemPrice').val()
      })

      if (this.model.isNew()) {
        var self = this
        this.collection.create(this.model, {
          success: function() {
            //app.navigate('wines/'+self.model.id, false)
            window.alert('Success')
          }
        })
      }
      else
        this.model.save()
    },

    deleteItem: function() {
      window.alert('Delete')
    }

  })

  return ItemEditView
})
