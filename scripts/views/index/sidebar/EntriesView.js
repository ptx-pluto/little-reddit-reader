define([
    'marionette',
    'views/index/sidebar/EntryView',
], function (Marionette, EntryView) {

    'use strict';

    var EntriesView = Marionette.CollectionView.extend({

	tagName: 'ul',

	className: 'entries',
	
	itemView: EntryView,

    });

    return EntriesView;

});
