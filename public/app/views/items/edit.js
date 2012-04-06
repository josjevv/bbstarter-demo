define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/items/edit.mustache'

], function($, _, Backbone, Mustache, template){
  var ItemEditView = Backbone.View.extend({
    events: {
        "click .save": "saveItem",
        "click .delete": "deleteItem"
    },

    initialize: function(){
      this.model.bind("change", this.render, this);
    },

    render: function(){
     var compiledTemplate = Mustache.render(template, this.model.toJSON() );
      $(this.el).html(compiledTemplate);
      return this;
    },

    saveItem: function() {
      window.alert("Save");
      this.model.set({
        name: $('#itemName').val(),
        grapes: $('#itemPrice').val()
      });

      if (this.model.isNew()) {
        var self = this;
        console.log(this);
        this.collection.__super__.create(this.model, {
          success: function() {
            //app.navigate('wines/'+self.model.id, false);
            window.alert("Success");
          }
        });
      } else {
        this.model.save();
      }

      return false;

    },

    deleteItem: function() {
      window.alert("Delete");
    }

  });

  return ItemEditView;
});
