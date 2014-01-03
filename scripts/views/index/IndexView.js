define([
    'underscore',
    'marionette',
    'views/index/content/SubredditView',
    'views/index/sidebar/SidebarView',
    'views/index/content/EmptyContentView',
    'text!templates/index.html',
], function (_, Marionette, SubredditView, SidebarView, EmptyContentView, template) {

    'use strict';

    var IndexView = Marionette.Layout.extend({

	id: 'content-page',

	tagName: 'div',

	className: 'content-page',

	template: _.template(template),

	regions: {
	    sidebar: '#sidebar-container',
	    content: '#main',
	},

	initialize: function(options){
	    this.categories = this.collection;
	    this.vent = options.vent;
	},

	onRender: function(){
	    this.sidebar.show(new SidebarView({ collection: this.categories }));
//	    this.content.show(new EmptyContentView());
	},

	onSidebarToggle: function(){
	    if (this.fullscreen === true) {
		this.fullscreen = false;
		this.content.$el.removeClass('fullscreen');
	    }
	    else if (this.fullscreen === false) {
		this.fullscreen = true;
		this.content.$el.addClass('fullscreen');
	    }
	    else {
		if (this.content.$el.hasClass('fullscreen')) {
		    this.content.$el.removeClass('fullscreen');
		    this.fullscreen = false;
		}
		else {
		    this.content.$el.addClass('fullscreen');
		    this.fullscreen = false;
		}
	    }
	},

	onRenderSubreddit: function(subreddit){
	    this.content.show(new SubredditView({ 
		model: subreddit,
		vent: this.vent 
	    }));
	    this.listenTo(this.content.currentView, 'sidebar:toggle', this.onSidebarToggle);
	},

    });

    return IndexView;

});
