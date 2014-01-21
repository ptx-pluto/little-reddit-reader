define([
    'jquery',
    'underscore',
    'relational',
    'models/Feed',
    'models/Feeds',
    'utils/Reddit',
], function ($, _, Relational, Feed, Feeds, fetcher) {

    'use strict';
    
    var Subreddit = Relational.RelationalModel.extend({

	relations: [{
	    key: 'feeds',
	    type: 'HasMany',
	    relatedModel: Feed,
	    collectionType: Feeds,
	    reverseRelation: {
		key: 'subreddit',
		type: 'HasOne',
	    }
	}],

	defaults: {},

	url: function(){
	    return '/r/' + this.get('name') + '/new.json';
	},

	fetch: function(){
	    (function(self) {
		fetcher(self.get('name'))
		    .done(function(data){
			_.each(data.data.children, function(feed){
			    self.get('feeds').add(feed.data);
			});		
			self.trigger('loaded');
		    });
	    }(this));
	},
	
    });

    return Subreddit;

});
