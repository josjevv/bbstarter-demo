// Filename: router.js
define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'models/item',
  'views/home/main',
  'views/items/list',
  'views/items/edit',
  'collections/items',
  'views/static/about'
], function($, _, Backbone,
  ItemModel,
  MainHomeView,
  itemListView,
  ItemEditView,
  ItemsCollection,
  aboutView
  ){

  var itemsCollection = new ItemsCollection()

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'items': 'showItems',
      'items/add': 'addItem',
      'items/:id': 'viewItem',
      'about': 'showAbout',

      // Default
      '*actions': 'defaultAction'
    },

    /* Taken from http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/ */
    showView: function(view) {
      view.render().el
    },

    showItems: function(){
      this.showView( new itemListView({}) )
    },

    addItem: function() {
      this.showView( new ItemEditView({ model: new ItemModel(), collection: new ItemsCollection }))
    },

    showAbout: function () {
      this.showView( new aboutView({}))
    },

    defaultAction: function(actions){
      this.showView( new MainHomeView({}) )
    }

  })

  var initialize = function(){
    var app_router = new AppRouter
    Backbone.history.start()
  }

  return {
    initialize: initialize
  }
})
