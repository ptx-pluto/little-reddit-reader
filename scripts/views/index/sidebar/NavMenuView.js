define([
    'marionette',
    'views/index/sidebar/SubMenuView',
], function (Marionette, SubMenuView) {

    'use strict';

    var NavMenuView = Marionette.CollectionView.extend({

	id: 'sidebar-nav-menu',

	tagName: 'ul',
	
	className: 'nav-menu',

	itemView: SubMenuView,

    });

    return NavMenuView;

});
