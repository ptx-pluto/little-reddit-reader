define([
    'underscore',
    'marionette',
    'text!templates/sidebar/submenu.html',
    'text!templates/sidebar/submenu-tab.html',
    'text!templates/sidebar/entry.html',
], function (_, Marionette, tMenu, tTab, tEntry) {

    'use strict';

    var SubMenuTabView = Marionette.ItemView.extend({

	tagName: 'a',
	
	className: 'menu-tab',
	
	template: _.template(tTab),

	ui: {
	    title: '.tiitle',
	    indicator: '.indicator',
	},

	triggers: {
	    'click': 'toggle',
	},

    });

    var EntryView = Marionette.ItemView.extend({

	tagName: 'li',
	
	className: 'entry',

	template: _.template(tEntry),

	ui: {
	    title: '.tiitle',
	    indicator: '.indicator',
	},

    });

    var EntriesView = Marionette.CollectionView.extend({

	tagName: 'ul',

	className: 'entries',
	
	itemView: EntryView,

	onRender: function(){
	    this.$el.hide();
	    this.visibility = false;
	},

	onToggle: function(){
	    if (this.visibility) {
		this.visibility = false;
                this.$el.stop(true, true).slideUp('normal');
	    }
	    else {
		this.visibility = true;
                this.$el.filter(':visible').slideUp('normal');
                this.$el.stop(true, true).slideDown('normal');
	    }
	},

    });

    var SubMenuView = Marionette.Layout.extend({

	tagName: 'li',

	className: 'submenu',

	template: _.template(tMenu),

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
