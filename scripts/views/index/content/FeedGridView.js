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

	events: {},

	onAfterItemAdded: function(){
	    this.organize();
	    console.log('one added');
	},

	organize: function(){
	    $('.feed', this.$el).wookmark({
		container: this.$el,
		align: 'left',
		offset: 15,
	    });
	},

	onRender: function(){
	    this.organize();
	    console.log('render');
	},

    });

    return FeedGridView;
    
});
