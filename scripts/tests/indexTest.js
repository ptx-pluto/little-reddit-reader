define([
    'jquery',
    'marionette',
    'models/Subreddit',
    'views/index/IndexView',
] ,function ($, Marionette, Subreddit, IndexView) {
    
    'use strict';

    return function () {
	var testModel = new Subreddit({ name: 'beards' });
	var testPage = new Marionette.Region({ el: 'body' });
	testPage.show(new IndexView());
	testPage.currentView.render();
	testPage.currentView.triggerMethod('render:subreddit', testModel);
	testModel.fetch();
    };

});
