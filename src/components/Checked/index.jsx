
var classNames = require('classnames');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var Checked = React.createClass({

	propTypes:{
		url: ReactPropTypes.string,
		data: ReactPropTypes.array,
//		unset: ReactPropTypes.array,
		calloutGoodType: ReactPropTypes.string,
		calloutBadType: ReactPropTypes.string
	},

	render: function() {
/**		var unmappedObjs = this.props.unset.map(function(datum) {
			var inner =
			(
				<span>Meta Unset: <strong>{datum.type}</strong>.<br />
				Used By: <strong>{datum.usedBy}</strong></span>
			);
            return (
                <MetaBlock key={datum.type} calloutClass={this.props.calloutBadType} datum={datum} inner={inner} />
            );
        }.bind(this));**/
		return (
			<ul className="checked-set row">
				<li key={this.props.url+"/document"} className="large-4 columns checked-set__checked-meta">
					<div className="callout primary">
						<strong>Document:</strong> <a href={this.props.url}>{this.props.url}</a>
					</div>
				</li>
				{this.props.children}

			</ul>
		);
	},

	componentDidUpdate: function() {
    	//this._scrollToBottom();
 	},

	componentWillReceiveProps: function(nextProps, i) {

 		//console.log(nextProps);
		//console.log(i);
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
