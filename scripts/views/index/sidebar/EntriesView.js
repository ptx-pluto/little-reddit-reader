define([
    'marionette',
    'views/index/sidebar/EntryView',
], function (Marionette, EntryView) {

    'use strict';

    var EntriesView = Marionette.CollectionView.extend({

	tagName: 'ul',

	className: 'entries',
	
	itemView: EntryView,

	onRender: function(){
	    this.$el.hide();
	    this.visibility = false;
	},

	onToggle: function(){
	    console.log('toggle');
	    if (this.visibility) {
		console.log('hide');
		this.visibility = false;
                this.$el.stop(true, true).slideUp('normal');
	    }
	    else {
		console.log('show');
		this.visibility = true;
                this.$el.filter(':visible').slideUp('normal');
                this.$el.stop(true, true).slideDown('normal');
	    }
	},

    });

    return EntriesView;

});
