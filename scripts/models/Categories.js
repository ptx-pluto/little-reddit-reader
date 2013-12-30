define([

], function () {

    'use strict';

    var Categories = Backbone.Collection.extend({

	initialize: function(){
	    this.localStorage = new Backbone.LocalStorage('categories');
	}


    });

    return Categories;

});
