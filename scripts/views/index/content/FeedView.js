define([
    'marionette',
    'text!templates/feed.html',
], function (Marionette, template) {

    'use strict';

    var FeedView = Marionette.ItemView.extend({

	template: _.template(template),

    });

    return FeedView;
    
});
