var classNames = require('classnames');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');

var ReactPropTypes = React.PropTypes;

var App = React.createClass({

	propTypes:{
		display: ReactPropTypes.object,
	},

	getInitialState: function() {
		return {value: 'Hello!'};
    },

    handleChange: function(event) {
		this.setState({value: event.target.value});
    },

    render: function() {
		var value = this.state.value;
		const { className, selectOnFocus } = this.props;
		const classes = classNames( className, {
			'form-text-input': true,
			'is-error': this.props.isError,
			'is-valid': this.props.isValid
		} );
		return (
			<input type="text" value={value} onChange={this.handleChange} />
		);
  	},

	componentDidUpdate: function() {
		//this._scrollToBottom();
	},

	/**
	* Event handler for 'change' events coming from the
	*/
	_onChange: function() {
		// Stuff
	}


});

module.exports = App;
