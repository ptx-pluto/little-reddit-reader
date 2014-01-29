define([
    'underscore',
    'marionette',
    'text!templates/subreddit/load.html'
], function (_, Marionette, template) {

    'use strict';

    var LoadView = Marionette.ItemView.extend({

	template: _.template(template),
	
	tagName: 'div',
	
	triggers: {
	    'click': 'load:more'
	},

	initialize: function(options) {
	    this.subreddit = options.model;
	},
	
	onLoadMore: function() {
	    this.subreddit.loadMore();
	}

    });

    return LoadView;

});
