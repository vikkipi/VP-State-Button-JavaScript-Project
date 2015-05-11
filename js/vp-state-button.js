/*********************************

 * VP State Button
 * Code by Viktoriia Pshenychko
 * http://www.vizhually.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015

*********************************/

function VPStateButton(hash) {

	this.id 			= hash.id;
	this.states 		= hash.states;
	this.defaultState 	= hash.defaultState ? hash.defaultState : 0 ;
	this.currentState 	= this.defaultState;

	setupStateButon.apply(this);
	bindEvents.apply(this);
	updateButton.apply(this);

	this.changeFunctions 	= [];
}

function setupStateButon() {
	this.container = $('#' + this.id);
	this.stateButton = $('<div>');

	this.stateButton.css({
		'position' 		: 'absolute',
		'left'			: 0,
		'right'			: 0,
		'bottom'		: 0,
		'top'			: 0
	});

	this.container.append(this.stateButton);

}

function updateButton() {
	var state = this.states[this.currentState];
	this.stateButton.removeClass();
	this.stateButton.addClass(state['classname']);
	this.stateButton.html(state['content']);
}

function bindEvents() {


	this.stateButton.bind('click', function(evt){
		this.currentState = (this.currentState == this.states.length - 1) ? 0 : (this.currentState + 1);

		var state = this.states[this.currentState]

		for (var i = 0; i < this.changeFunctions.length; i++) {
			var changeFunction = this.changeFunctions[i]
			changeFunction(state);
		};

		updateButton.apply(this);
	}.bind(this) );
}

VPStateButton.prototype.onChange = function(changeFunction) {
	this.changeFunctions.push(changeFunction)
}
