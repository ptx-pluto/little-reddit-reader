define([
    'jquery',
    'marionette',
    'models/Subreddit',
    'models/Categories',
    'views/index/IndexView',
    'controllers/IndexController',
], function ($, Marionette, Subreddit, Categories, IndexView, IndexController) {
    
    'use strict';

    var IndexModule = function(self, app){

	this.vent = new IndexController();
	this.subreddit = new Subreddit({ name: 'python' });
	this.categories = new Categories();

	this.on('start', function(){

	    app.page.show(new IndexView({ 
		collection: self.categories, 
		vent: self.vent 
	    }));
	    app.page.currentView.triggerMethod('render:subreddit', self.subreddit);
	    self.categories.fetch();
	    self.subreddit.fetch();
	});

    };

    return IndexModule;

});
