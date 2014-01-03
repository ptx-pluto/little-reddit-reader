define([
    'underscore',
    'marionette',
    'views/index/content/FeedGridView',
    'text!templates/subreddit.html',
], function (_, Marionette, FeedGridView, template) {

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

	triggers: {
	    'click .subreddit-header': 'sidebar:toggle',
	},

	initialize: function(options){
	    this.subreddit = this.model;
	    this.vent = options.vent;
	},

	onRender: function(){
	    this.body.show(new FeedGridView({ 
		collection: this.subreddit.get('feeds'),
		vent: this.vent 
	    }));
	},

	onSidebarToggle: function(){
	    this.vent.trigger('sidebar:toggle');
	},

    });
    
    return SubredditView;

});
