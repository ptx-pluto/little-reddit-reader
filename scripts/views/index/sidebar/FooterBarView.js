define([
    'underscore',
    'backbone',
    'marionette',
    'text!templates/sidebar/footer-bar.html'
], function (_, Backbone, Marionette, template) {

    'use strict';

    var ENTER_KEY = 13;

    var FooterBarView = Marionette.ItemView.extend({

	id: 'sidebar__input-box',

	tagName: 'div',

	className: 'sidebar__input-box',

	template: _.template(template),

	ui: {
	    input: '.sidebar__input',
	    submit: '.sidebar__input-submit'
	},

	events: {
	    'keypress @ui.input': 'onInput'
	},

	onInput: function(event) {
	    console.log(event);
	    if (event.which === ENTER_KEY ){
		Backbone.history.navigate('#/subreddit/' + this.ui.input.val());
	    }
	}

    });

    return FooterBarView;

});
