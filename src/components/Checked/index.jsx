var MetaBlock = require('../MetaBlock');
var classNames = require('classnames');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var Checked = React.createClass({

	propTypes:{
		urlMetaObj: ReactPropTypes.object,
		calloutGoodType: ReactPropTypes.string,
		calloutBadType: ReactPropTypes.string
	},

	render: function() {
		var mappedObjs = this.props.urlMetaObj.meta.data.map(function(datum) {
			var inner =
			(
				<span>Meta Set: <strong>{datum.type}</strong>.<br />
				Meta Content: <strong>{datum.content}</strong></span>
			);
			return (
                <MetaBlock key={this.props.urlMetaObj.doc+'/'+datum.type} calloutClass={this.props.calloutGoodType} datum={datum} inner={inner} />
            );
        }.bind(this));
		var unmappedObjs = this.props.urlMetaObj.meta.unset.map(function(datum) {
			var inner =
			(
				<span>Meta Unset: <strong>{datum.type}</strong>.<br />
				Used By: <strong>{datum.usedBy}</strong></span>
			);
            return (
                <MetaBlock key={this.props.urlMetaObj.doc+'/'+datum.type} calloutClass={this.props.calloutGoodType} datum={datum} inner={inner} />
            );
        }.bind(this));
		return (
			<ul className="checked-set row">
				<li key={this.props.urlMetaObj.doc+"/document"} className="large-4 columns checked-set__checked-meta">
					<div className="callout primary">
						<strong>Document:</strong> <a href={this.props.urlMetaObj.doc}>{this.props.urlMetaObj.doc}</a>
					</div>
				</li>
				{mappedObjs}
				{unmappedObjs}
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
