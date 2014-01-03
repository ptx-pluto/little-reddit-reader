define([
    'jquery',
    'marionette',
    'views/index/content/FeedView',
    'views/index/content/EmptyContentView',
    'wookmark',
], function ($, Marionette, FeedView, EmptyContentView) {

    'use strict';

    var FeedGridView = Marionette.CollectionView.extend({
	
	className: 'feed-grid',
	
	tagName: 'ul',

	itemView: FeedView,
	
	emptyView: EmptyContentView,

	initialize: function(options) {
	    this.vent = options.vent;
	},

	onRender: function(){
	    this.organize();
	    this.listenTo(this.vent, 'window:resize', this.organize);
	    this.listenTo(this.vent, 'sidebar:toggle', this.delayOrganize);
	},

	onAfterItemAdded: function(){
	    this.organize();
	},

	organize: function(){
	    $('.feed', this.$el).wookmark({
		container: this.$el,
		align: 'center',
		offset: 15,
	    });
	},

	delayOrganize: function(){
	    var self = this;
	    setTimeout(function(){ self.organize(); }, 1000);
	},

    });

    return FeedGridView;
    
});
