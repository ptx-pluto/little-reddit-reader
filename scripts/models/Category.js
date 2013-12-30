define([
    'relational'
], function (Relational) {

    'use strict';

    var Category = Relational.RelationalModel.extend({

	relations: [{
	    key: 'subreddits',
	    type: 'HasMany',
	    relatedModel: Subreddit,
	    collectionType: Subreddits,
	    reverseRelation: {
		key: 'category',
		type: 'HasOne',
	    }
	}]

	initialize: function(){

	}

    });

    return Category;

});
