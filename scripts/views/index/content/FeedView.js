define([
    'underscore',
    'marionette',
    'text!templates/feed.html',
], function (_, Marionette, template) {

    'use strict';

    var FeedView = Marionette.ItemView.extend({

	tagName: 'li',

	className: 'feed',

	template: _.template(template),
	
	ui: {
	    image: 'img',
	},

	onRender: function(){
	    var self = this;
	    this.ui.image.hide();
	    this.ui.image.load(function(){
		self.ui.image.show();
		self.trigger('loaded');
	    });
	},

    });

    return FeedView;
    
});
