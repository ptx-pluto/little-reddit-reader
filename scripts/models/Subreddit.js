define([
    'jquery',
    'underscore',
    'relational',
    'models/Feed',
    'models/Feeds',
], function ($, _, Relational, Feed, Feeds) {

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

	initialize: function(){},

	fetch: function(){
	    var self = this;
	    $.ajax({ 
		url: 'http://reddit.com' + _.result(this, 'url') ,
		dataType: 'jsonp',
		jsonp: 'jsonp', 
	    }).done(function(data){
		_.each(data.data.children, function(feed){
		    self.get('feeds').add(feed.data);
		});		
		self.trigger('loaded');
	    });

	},
	
    });

    return Subreddit;

});
