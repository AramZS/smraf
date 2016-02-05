/*
 * Actions
 */
var urlStore = require('../../stores/store.js');
var urlProcessor = require('../../utils/urlProcessor');
var Reflux = require('reflux');

function _putURLToStore(url){
	var check = true;
	urlProcessor.getData(url).catch(
		function(error){
			console.log(error);
			check = false;
		}
	).then( function (docMetaData){
			var docMetaObj = {
				doc: url,
				meta: docMetaData
			};
			urlStore.loadSet( docMetaObj );
		}
	);
	return check;
}


// Each action is like an event channel for one specific event. Actions are called by components.
// The store is listening to all actions, and the components in turn are listening to the store.
// Thus the flow is: User interaction -> component calls action -> store reacts and triggers -> components update
//
// With the switch to Reflux, this area acts as both action maker and
// notifier of events.

var urlActions = Reflux.createActions({
	        "getURL" : { asyncResult: true, children: ["completed","failed"] },
	    });
// when triggered, call async operation and trigger related actions
urlActions.getURL.listen(function(url){
    // By default, the listener is bound to the action
    // so we can access child actions using 'this'
	_putURLToStore(url);
});

module.exports = urlActions;
