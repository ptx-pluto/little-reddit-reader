define([
    'underscore',
    'marionette',
    'text!templates/sidebar/entry.html',
], function (_, Marionette, template) {

    'use strict';

    var EntryView = Marionette.ItemView.extend({

	tagName: 'li',
	
	className: 'entry',

	template: _.template(template),

	ui: {
	    title: '.tiitle',
	    indicator: '.indicator',
	},

    });

    return EntryView;

});
