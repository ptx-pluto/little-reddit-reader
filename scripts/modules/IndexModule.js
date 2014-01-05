define([
    'jquery',
    'backbone',
    'marionette',
    'models/Subreddit',
    'models/Categories',
    'views/index/IndexView',
], function ($, Backbone, Marionette, Subreddit, Categories, IndexView) {
    
    'use strict';

    var IndexController = Marionette.Controller.extend({
	
	initialize: function(options){
	    this.module = options.module;
	    var self = this;
	    $(window).resize(function(){
		self.trigger('window:resize');
	    });
	},
	
	routeSubreddit: function(name){
	    this.module.currentSubreddit = new Subreddit({ name: name });
	    this.module.region.currentView.triggerMethod(
		'route:subreddit', 
		this.module.currentSubreddit
	    );
	    this.module.currentSubreddit.fetch();
	},
	
    });

    var IndexModule = function(self, app){

	this.controller = new IndexController({ module: this });

	this.router = new Marionette.AppRouter({
	    controller: this.controller,
	    appRoutes: {
		'subreddit/:name': 'routeSubreddit'
	    },
	});

	this.region = app.page;
	this.subreddit = new Subreddit({ name: 'python' });
	this.categories = new Categories();

	this.on('start', function(){
	    app.page.show(new IndexView({ 
		collection: self.categories, 
		vent: self.controller 
	    }));
	    self.region.currentView.triggerMethod(
		'render:subreddit', 
		self.subreddit
	    );
	    self.categories.fetch();
	    self.subreddit.fetch();
	    Backbone.history.start();
	});

    };

    return IndexModule;

});
