module.exports = {

	socials: {
		'title': {
			field: 'content',
			about: '',
			usedBy: ['general', 'facebook', 'twitter']
		},
		'description': {
			field: 'content',
			about: '',
			usedBy: ['general', 'facebook', 'twitter']
		},
		'canonical': {
			field: 'href',
			about: '',
			usedBy: ['general', 'facebook', 'twitter']
		},
		'alternate': {
			field: 'href',
			about: 'feed',
			usedBy: ['general']
		},
		'author': {
			field: 'content',
			about: '',
			usedBy: ['general', 'facebook', 'twitter']
		},
		'og:title': {
			field: 'content',
			about: '',
			usedBy: ['facebook', 'twitter'],
		},
		'og:site_name': {
			field: 'content',
			about: '',
			usedBy: ['facebook', 'twitter'],
		},
		'og:description': {
			field: 'content',
			about: '',
			usedBy: ['facebook', 'twitter'],
		},
		'og:url': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'og:locale': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'twitter:site': {
			field: 'content',
			about: '',
			usedBy: ['twitter'],
		},
		'twitter:description': {
			field: 'content',
			about: '',
			usedBy: ['twitter'],
		},
		'og:type': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'article:published_time': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'article:author': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'article:publisher': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'article:section': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'article:tag': {
			field: 'content',
			about: '',
			usedBy: ['facebook'],
		},
		'twitter:card': {
			field: 'content',
			about: '',
			usedBy: ['twitter'],
		},
		'twitter:creator': {
			field: 'content',
			about: '',
			usedBy: ['twitter'],
		},
		'twitter:title': {
			field: 'content',
			about: '',
			usedBy: ['twitter']
		},
		'og:image': {
			field: 'content',
			about: '',
			usedBy: ['facebook', 'twitter'],
		},
		'twitter:image': {
			field: 'content',
			about: '',
			usedBy: ['twitter'],
		},

	},

	/**
	 * Array of elements, each containing e.type, e.about and e.content.
	 * @type {Array}
	 */
	data: [],

	getDocument: function(url) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('get', url, true);
			xhr.responseType = 'document';
			//console.log(xhr);
			xhr.onload = function() {
				//console.log(xhr.responseXML);
				var status = xhr.status;
				if (status == 200) {
					//console.log(xhr.response);
					resolve(xhr.response);
				} else {
					reject(status);
				}
			};
			xhr.send();
		});
	},

	getData: function(url) {
		var docMetaData = this.getDocument(url).then(
			function( docFound ){
				var cannonical = docFound.querySelectorAll('[rel="canonical"]')[0].getAttribute('href');
				if ( cannonical !== docFound.URL){
					this.data.push({
						type: 'referer',
						content: docFound.URL,
						about: '',
						usedBy: ['general', 'facebook', 'twitter']
					});
					return this.getData(cannonical);
				}
				var list = docFound.head.getElementsByTagName('*');

				for (var i = 0; i < list.length; i++) {
					var tagObj = this.getMetaFromTag(list[i]);
					if (false !== tagObj && this.socials.hasOwnProperty(tagObj.type)){
						tagObj.about = this.socials[tagObj.type].about;
						tagObj.usedBy = this.socials[tagObj.type].usedBy;
						this.data.push(tagObj);
						delete this.socials[tagObj.type];
					}
				    console.log(list[i].getAttribute('content')); //second console output
					if ( list.length === i ){
						return this.data;
					}
				}

				this.data.push(
					{
						type: 'title',
						content: docFound.title
					}
				);
			}.bind(this)
		).then( function(){
			return {
				set: this.data,
				unset: this.socials
			};
		}.bind(this));

		return docMetaData;
	},

	getMetaFromTag: function(element){
		return this.checkForValidAttr(element);
	},

	checkForValidAttr: function(tag){
		var possibleTypes = [
			'name',
			'rel',
			'property'
		];
		possibleTypes.forEach( function(aTag){
			if ("" !== tag.getAttribute(aTag) && null !== tag.getAttribute(aTag) && undefined !== tag.getAttribute(aTag) ){
				var tagName = tag.getAttribute(aTag);
				switch (aTag) {
					case tag.getAttribute(this.socials[tagName].field):
						return {
							type: tagName,
							content: tag.getAttribute(this.socials[tagName].field)
						};
					case 'name':
					case 'property':
						return {
							type: tagName,
							content: tag.getAttribute('content')
						};
					case 'rel':
						return {
							type: tagName,
							content: tag.getAttribute('href')
						};
					default:
						return false;
				}
			} else {
				return false;
			}
		});
	}

};
