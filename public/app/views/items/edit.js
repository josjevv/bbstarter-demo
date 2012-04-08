define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'mustache',
  'models/item',
  'views/bootstrap',
  'text!templates/items/edit.mustache',
  'text!templates/items/new.mustache',
  'handlebars',
  'bootstrap'

], function($, _, Backbone, Mustache, Item, Bootstrap, editTemplate, newTemplate, Handlebars){
  var app = new Backbone.Router;
  var ItemEditView = Backbone.View.extend({
    el: $('#page'),
    events: {
      'submit #new-item': 'saveItem',
      'click .cancel': 'cancelItem'
    },

    initialize: function(){
      this.model = new Item({_id: this.options.model.id})
      //this.model.bind('change', this.render, this)
      this.model.fetch()
    },

    render: function(){
      var item = this.model.attributes
      var template = this.model.isNew() ? newTemplate : editTemplate
      var compiledTemplate = Mustache.render(template, item )
      $(this.el).html(compiledTemplate)
      //var tpl = Handlebars.compile(template);
      //tpl(item);
      return this
    },


    /*
     *  Event actions
     */

    saveItem: function(e) {
      e.preventDefault()

      var item = {
        name: $('#itemName').val(),
        price: $('#itemPrice').val()
      }

      if (this.model.isNew()) {
        var self = this
        this.model.set(item)
        this.collection.create(this.model, {
          success: function() {
            // Navigate to the specific resource
            app.navigate('items/'+self.model.id, {trigger: true, replace: true})
          }
        })
      }
      else {
        this.model.save(item, {
          success: function (model, response) {
            app.navigate('items/'+model.id, {trigger: true, replace: true})
          },
          error: function (model, response) {
            new Bootstrap.alert({ el: $('#page') }).render('There was an error while updating')
          }
        })
      }
    },

    cancelItem: function (e) {
      if (this.model.isNew())
        app.navigate('items', {trigger: true, replace: true})
      else
        app.navigate('items/'+this.model.id, {trigger: true, replace: true})
    }

  })

  return ItemEditView
})
