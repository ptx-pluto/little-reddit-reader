define([
    'marionette',
    'views/index/content/FeedGridView',
    'text!templates/subreddit.html',
], function (Marionette, FeedGridView, template) {

    'use strict';

    var SubredditView = Marionette.Layout.extend({

	tagName: 'div',

	className: 'subreddit',

	template: _.template(template),

	regions: {
	    header: '.subreddit-header',
	    body: '.subreddit-body',
	    load: 'subreddit-load',
	},

	initialize: function(){
	    this.subreddit = this.model;
	},

	onRender: function(){
	    this.body.show(new FeedGridView({ collection: this.subreddit.get('feeds') }));
	},

    });
    
    return SubredditView;

});
