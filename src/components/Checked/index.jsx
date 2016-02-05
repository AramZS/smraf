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
                <li className="large-4 columns checked-set__checked-meta" key={datum.type}>
					<div className="callout success">
						Meta Set: {datum.type}.
						Meta Content: {datum.content}
					</div>
				</li>
            );
        }.bind(this));

		return (
			<ul className="checked-set row">
				<li key="document" className="large-4 columns checked-set__checked-meta">
					<div className="callout primary">
						Document: {this.props.urlMetaObj.doc}
					</div>
				</li>
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
