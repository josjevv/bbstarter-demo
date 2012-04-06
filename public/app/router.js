// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
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

  var itemsCollection = new ItemsCollection();

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
    showView: function(selector, view) {
        console.log("Current View: " + selector);
        if (this.currentView)
            this.currentView.close();

        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    showItems: function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      itemListView.render();
    },

    addItem: function() {
      this.showView( '#page', new ItemEditView({ model: new ItemModel(), collection: ItemsCollection }));
    },

    showAbout: function () {
      aboutView.render();
    },

    defaultAction: function(actions){
      this.showView( '#page', new MainHomeView({}) );
    }

  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
