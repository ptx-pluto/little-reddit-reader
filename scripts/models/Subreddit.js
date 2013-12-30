define([
    'relational',
    'models/Feed',
    'models/Feeds',
    'models/Category',
], function (Relational, Feed, Feeds, Category) {

    'use strict';
    
    var Subreddit = Relational.RelationalModel.extend({

	relations: [{
	    key: 'feeds',
	    type: 'HasMany',
	    relatedModel: Feed,
	    collectionType: Feeds,
	    reverseRelation: {
		key: 'stream',
	    }
	}],

	defaults: {},

	url: function(){
	    return '/r/' + this.get('name') + '/new.json';
	},

	initialize: function(){},

	fetch: function(){},

    });

    return Subreddit;

});
