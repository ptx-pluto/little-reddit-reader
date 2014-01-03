define([
    'marionette',
], function(Marionette) {

    'use strict';
    
    var IndexController = Marionette.Controller.extend({

	initialize: function(){
	    var self = this;
	    $(window).resize(function(){
		self.trigger('window:resize');
	    });
	},

    });

    return IndexController;

});
