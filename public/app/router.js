// Filename: router.js
define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'models/item',
  'views/navbar/main',
  'views/home/main',
  'views/items/list',
  'views/items/edit',
  'views/items/show',
  'collections/items',
  'views/static/about'
], function($, _, Backbone,
  ItemModel,
  NavBarView,
  MainHomeView,
  itemListView,
  ItemEditView,
  ItemShowView,
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
      'items/:id/edit': 'editItem',
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

    viewItem: function (id) {
      this.showView( new ItemShowView({ model: new ItemModel({ _id: id }), collection: new ItemsCollection }))
    },

    editItem: function (id) {
      this.showView( new ItemEditView({ model: new ItemModel({ _id: id }), collection: new ItemsCollection }))
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
    var navbar = new NavBarView().render()
    Backbone.history.start()
  }

  return {
    initialize: initialize
  }
})
