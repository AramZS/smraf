var React = require('react');
var ReactPropTypes = React.PropTypes;

var Checked = React.createClass({

	propTypes:{
		urlMetaObj: ReactPropTypes.object,
	},

	render: function() {
		console.log(this.props.urlMetaObj);
		var checkedObjects = this.props.urlMetaObj.meta.objs.forEach(function(element){
			var urlMetaSet = this.props.urlMetaObj.meta.data.filter(function(elementObj){
				return elementObj.type === element;
			})[0];
		}.bind(this));

		var mappedObjs = this.props.urlMetaObj.meta.data.map(function(datum) {
            return (
                <li>Meta Set: {datum.type}. Meta Content: {datum.content}</li>
            );
        }.bind(this));

		return (
			<ul>
				<li>Document: {this.props.urlMetaObj.doc}</li>
				{mappedObjs}
			</ul>
		);
	},

	componentDidUpdate: function() {
    	//this._scrollToBottom();
 	},

	_scrollToBottom: function() {

		//ul.scrollTop = ul.scrollHeight;
	},

	/**
	* Event handler for 'change' events
	*/
	_onChange: function() {
		//this.setState(getStateFromStores());
	}


});

module.exports = Checked;
