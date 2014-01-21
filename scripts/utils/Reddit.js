define([
    'jquery',
], function($) {
    
    'use strict';
    
    return function(subreddit, order) {	

	order = order || 'new';

	return $.ajax({
	    url: 'http://reddit.com/r/' + subreddit + '/' + order + '.json',
	    dataType: 'jsonp',
	    jsonp: 'jsonp',
	});
    };

});
