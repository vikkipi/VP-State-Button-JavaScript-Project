$(document).ready(function(){

	var states = [
		{ 
			id				: 'state-1',
			classname		: 'state-1-class',
			content			: 'Hello ',
		},
		{ 
			id				: 'state-2',
			classname		: 'state-2-class',
			content			: 'Привет ',
		},
		{ 
			id				: 'state-3',
			classname		: 'state-3-class',
			content			: 'Bonjour ',
		},
	]

	var stateButton = new VPStateButton({
		id  			: 'state-button-container',
		states 			: states,
		defaultState 	: 0
	}); 

	var display = $('#display');
	stateButton.onChange(function(state){
		display.text(state.content);
	});

});