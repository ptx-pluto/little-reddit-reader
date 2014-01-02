define([
    'underscore',
    'marionette',
    'views/index/sidebar/StatusBarView',
    'views/index/sidebar/FooterBarView',
    'views/index/sidebar/NavMenuView',
    'text!templates/sidebar/sidebar.html'
], function (_, Marionette, StatusBarView, FooterBarView, NavMenuView, template) {

    'use strict';

    var SidebarView = Marionette.Layout.extend({
	
	tagName: 'div',

	className: 'sidebar',

	id: 'sidebar',

	template: _.template(template),

	regions: {
	    statusBar: '#sidebar-status-bar-container',
	    navMenu:   '#sidebar-nav-menu-container',
	    footerBar: '#sidebar-footer-bar-container',
	},

	initialize: function(){
	    this.categories = this.collection;
	},

	onRender: function(){
	    this.statusBar.show(new StatusBarView());
	    this.navMenu.show(new NavMenuView({ collection: this.categories }));
	    this.footerBar.show(new FooterBarView());
	},

    });

    return SidebarView;

});
