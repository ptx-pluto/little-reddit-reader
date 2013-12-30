define([
    'marionette',
    'views/index/content/FeedView',
], function (Marionette, FeedView) {

    'use strict';

    var FeedGridView = Marionette.CollectionView.extend({

	itemView: FeedView,
	
	className: 'feed-grid',
	
	tagName: 'ul',

    });

    return FeedGridView;
    
});
