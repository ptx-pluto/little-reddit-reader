define([
    'underscore',
    'marionette',
    'views/index/sidebar/SubMenuTabView',
    'views/index/sidebar/EntriesView',
    'text!templates/sidebar/submenu.html',
], function (_, Marionette, SubMenuTabView, EntriesView, template) {

    'use strict';

    var SubMenuView = Marionette.Layout.extend({

	tagName: 'li',

	className: 'submenu',

	template: _.template(template),

	regions: {
	    tab: '.menu-tab-container',
	    entries: '.entries-container',
	},

	initialize: function(){
	    this.category = this.model;
	    this.subreddits = this.category.get('subreddits');
	},

	onRender: function(){
	    this.tab.show(new SubMenuTabView({ model: this.category }));
	    this.entries.show(new EntriesView({ collection: this.subreddits }));

	    var self = this;
	    this.listenTo(this.tab.currentView, 'toggle', function(){
		self.entries.currentView.triggerMethod('toggle');
	    });

	},

    });

    return SubMenuView;

});
