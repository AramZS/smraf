/*
 * The store for API Deployment pointers
 *
 */
 var Reflux = require('reflux');
 var urlActions = require('../actions/urlActions');
 var assign = require('object-assign');

var _urls = [];

function _updateStoreWithNewMeta(docMetaObj) {

		_urls.push(docMetaObj);
}

var urlStore = Reflux.createStore({
    listenables: [urlActions],

    getInitialState: function(){
        _updateStoreWithNewMeta( {url: false} );
        return _urls;
    },

    get: function(url) {
        //console.log(id);
        return _urls.filter(function(docMetaObj) {
           return docMetaObj.doc === url;
	   }.bind(this));
    },

    getAll: function() {
      return _urls;
    },

    loadSet: function(docMetaObj){
        //console.log(socialObj);
        if (undefined !== this.get(docMetaObj.doc)){
            _updateStoreWithNewMeta(docMetaObj);
            this.urlsUpdated(_urls);
        }
    },

    urlsUpdated: function(urls){
        this.urls = urls;
        this.trigger(urls);
    }

});

module.exports = urlStore;
