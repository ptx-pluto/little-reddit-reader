define([
    'underscore',
    'marionette',
    'text!templates/sidebar/submenu-tab.html',
], function (_, Marionette, template) {

    'use strict';

    var SubMenuTabView = Marionette.ItemView.extend({

	tagName: 'a',
	
	className: 'menu-tab',
	
	template: _.template(template),

	ui: {
	    title: '.tiitle',
	    indicator: '.indicator',
	},

	triggers: {
	    'click': 'toggle',
	},

    });

    return SubMenuTabView;
    
});
