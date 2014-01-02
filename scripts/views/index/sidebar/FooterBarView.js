define([
    'underscore',
    'marionette',
    'text!templates/sidebar/footer-bar.html',
], function (_, Marionette, template) {

    'use strict';

    var FooterBarView = Marionette.ItemView.extend({

	id: 'sidebar-footer-bar',

	tagName: 'div',

	className: 'footer-bar',

	template: _.template(template),

    });

    return FooterBarView;

});
