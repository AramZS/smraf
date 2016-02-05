var urlActions = require('../../actions/urlActions');
var store = require('../../stores/store.js');
var Checked = require('../Checked');
var classNames = require('classnames');
var Reflux = require('reflux');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import Helmet from "react-helmet";
var React = require('react');

const metaData = {
  title: 'Social Media Ready AF?',
  description: 'Check your social media',
  canonical: 'http://example.com/path/to/page',
  meta:
	[
	    {'charset': 'utf-8'},
	    {'keywords': 'react,meta,document,html,tags'},
    ],
  link: [
	  {rel: 'stylesheet',
	  href: 'app.css'}
  ]
};

var ReactPropTypes = React.PropTypes;

let App = React.createClass({
	mixins: [Reflux.connectFilter(store, "urlMeta", function(urlMetaObjs) {
		//console.log(this.state);
		//console.log(urlMetaObjs);
		if ( null === this.state || undefined === this.state.value ){
			return false;
		}
		var urlMetaObj = urlMetaObjs.filter(function(urlMeta) {
           return urlMeta.doc === this.state.value;
        }.bind(this))[0];
		console.log(urlMetaObj);
		if ( undefined === urlMetaObj || false === urlMetaObj ) {
			return false;
        } else {
            //this.setState({'urlMeta': {} });
			return urlMetaObj;
		}
    })],

	propTypes:{
		display: ReactPropTypes.string,
	},

	getInitialState: function() {
		return {value: 'Type URL here'};
    },

    handleInputInitClick: function(event){
        if ( 'Type URL here' === this.state.value ){
            this.setState({value: ''});
        }
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
		console.log(this.state.urlMeta);
		var checkedObj = (<span></span>);
		if ( {} !== this.state.urlMeta && undefined !== this.state.urlMeta && false !== this.state.urlMeta){
			checkedObj = (<Checked key={this.state.urlMeta.doc+"/"} url={this.state.urlMeta.doc} data={this.state.urlMeta.meta.data} unset={this.state.urlMeta.meta.unset} calloutGoodType="success" calloutBadType="alert" />);
		}
		return (
			<div>
				<Helmet {...metaData} />
				<h1>SMRAF!!</h1>
				<input type="text" value={value} onChange={this.handleChange} onClick={this.handleInputInitClick} />
				<button className="button" onClick={this.handleSubmit}>Submit</button>
				<br />
				{checkedObj}
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
