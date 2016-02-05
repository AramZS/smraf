/*
 * The store for API Deployment pointers
 *
 */
 var Reflux = require('reflux');
 var urlActions = require('../actions/urlActions');
 var assign = require('object-assign');

var _urls = {};

function _updateStoreWithNewMeta(docMetaObj) {
    console.log(docMetaObj);
    if (false !== docMetaObj.doc){
        //console.log(docMetaObj);
        _urls[docMetaObj.doc] = docMetaObj.meta.data;
        //console.log(_urls);
    }
}

var urlStore = Reflux.createStore({
    listenables: [urlActions],

    getInitialState: function(){
        _updateStoreWithNewMeta( {doc: false} );
        return _urls;
    },

    get: function(url) {
        //console.log(id);
        return _urls[url];
    },

    getAll: function() {
      return _urls;
    },

    loadSet: function(docMetaObj){
        //console.log(docMetaObj);
        //console.log(this.get(docMetaObj.doc));
        if (undefined === this.get(docMetaObj.doc) || false === this.get(docMetaObj.doc)){
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
