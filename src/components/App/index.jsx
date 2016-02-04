var urlProcessor = require('../../utils/urlProcessor');
var classNames = require('classnames');
import { connect } from 'react-redux';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');

var ReactPropTypes = React.PropTypes;

let App = ({ dispatch }) => {

	propTypes:{
		display: ReactPropTypes.object,
	},

	getInitialState: function() {
		return {value: 'Type URL here'};
    },

    handleChange: function(event) {
		var action = {
			type : 'SET_URL'
			urlToTest : event.target.value
		}
		//this.setState({value: event.target.value});
    },

	handleSubmit: function(event){
		dispatch(urlProcessor.getData(this.state.value));
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
			<div>
				<h1>SMRAF!!</h1>
				<input type="text" value={value} onChange={this.handleChange} />
				<button onClick={this.handleSubmit}>Submit</button>
			</div>
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


};

App = connect()(App)

export default App
