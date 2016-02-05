var classNames = require('classnames');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var MetaBlock = React.createClass({

	propTypes:{
		url: ReactPropTypes.string,
		datum: ReactPropTypes.object,
		calloutClass: ReactPropTypes.string,
		inner: ReactPropTypes.object
	},

	render: function() {
		const classes = classNames( this.props.className, "large-4", "columns", "checked-set__checked-meta" );
		const calloutClasses = classNames( this.props.calloutClass, "callout" );
		return (
			<li className={classes}>
				<div className={calloutClasses}>
					{this.props.inner}
				</div>
			</li>
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

module.exports = MetaBlock;
