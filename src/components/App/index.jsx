var urlActions = require('../../actions/urlActions');
var store = require('../../stores/store.js');
var Checked = require('../Checked');
var MetaBlock = require('../MetaBlock');
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
	mixins: [Reflux.connect(store, "urlsMeta")],

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
        this.setState({setValue: this.state.value});
	},

    render: function() {
		var value = this.state.value;
		const { className } = this.props;
		const classes = classNames( className, {
			'form-text-input': true,
			'is-error': this.props.isError,
			'is-valid': this.props.isValid
		} );
		//console.log(this.state.urlsMeta);
        var checkedObj;
		if ( {} !== this.state.urlsMeta && undefined !== this.state.urlsMeta && false !== this.state.urlsMeta){
            if (undefined !== this.state.urlsMeta[this.state.setValue]){
                var urlMeta = this.state.urlsMeta[this.state.setValue];
                var urlValue = this.state.setValue;
                var mappedObjs = this.state.urlsMeta[this.state.setValue].map(function(datum) {
                    var inner =
                    (
                        <span>Meta Set: <strong>{datum.type}</strong>.<br />
                        Meta Content: <strong>{datum.content}</strong></span>
                    );
                    return (
                        <MetaBlock key={datum.type} calloutClass={"success"} datum={datum} >{inner}</MetaBlock>
                    );
                }.bind(this));
    			checkedObj = (
                    <Checked key={this.state.setValue+"/"} url={urlValue} data={urlMeta} calloutGoodType="success" calloutBadType="alert">{mappedObjs}</Checked>
                );
            }
		} else {
            checkedObj = (<span></span>);
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
		console.log(this.state);
        if (undefined !== this.state.setValue && this.state.value === this.state.setValue){
            urlActions.getURL(this.state.value);
        }
	},

	/**
	* Event handler for 'change' events coming from the
	*/
	_onChange: function() {
		// Stuff
	}


});

export default App;
