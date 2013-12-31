define([
    'underscore',
    'marionette',
    'views/index/content/SubredditView',
    'text!templates/index.html',
], function (_, Marionette, SubredditView, template) {

    'use strict';

    var IndexView = Marionette.Layout.extend({

	id: 'content-page',

	tagName: 'div',

	className: 'content-page',

	template: _.template(template),

	regions: {
	    sidebar: '#sidebar',
	    content: '#main',
	},

//	initialize: function(options){
//	    this.categories = this.collection;
//	},

//	onRender: function(){
//	    this.sidebar.show(new SidebarView({ collection: this.categories }));
//	    this.content.show(new EmptyContentView());
//	},

	onRenderSubreddit: function(subreddit){
	    this.content.show(new SubredditView({ model: subreddit }));
	},

    });

    return IndexView;

});
