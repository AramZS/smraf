var urlActions = require('../../actions/urlActions');
var store = require('../../stores/store.js');
var classNames = require('classnames');
var Reflux = require('reflux');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');

var ReactPropTypes = React.PropTypes;

let App = React.createClass({
	mixins: [Reflux.connectFilter(store, "urlMeta", function(urlMetaObjs) {
		console.log(this.state);
		console.log(urlMetaObjs);
		if ( null === this.state || undefined === this.state.value ){
			return false;
		}
		var urlMetaObj = urlMetaObjs.filter(function(urlMeta) {
           return urlMeta.doc === this.state.value;
        }.bind(this))[0];
		//console.log(this.props.post);
		if ( undefined === urlMetaObj || false === urlMetaObj ) {
			return false;
        } else {
			return urlMetaObj;
		}
    })],

	propTypes:{
		display: ReactPropTypes.string,
	},

	getInitialState: function() {
		return {value: 'Type URL here'};
    },

    handleChange: function(event) {
		this.setState({value: event.target.value});
    },

	handleSubmit: function(event){
		urlActions.getURL(this.state.value);
	},

    render: function() {
		var value = this.state.value;
		const { className } = this.props;
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
				<br />
				{JSON.stringify(this.state.urlMeta)}
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


});

export default App;
