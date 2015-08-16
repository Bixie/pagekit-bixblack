/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4)
	module.exports.template = __webpack_require__(5)


/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	        section: {
	            label: 'Appearance',
	            priority: 90
	        },

	        props: ['node'],

	        created: function () {
	            this.Bixie = this.$resource('api/bixie/:task');
	            this.Bixie.query({task: 'styles'}, function (data) {
	                this.$set('styles', data);
	            })
	        },

	        filters: __webpack_require__(14)

	    };

	    window.Site.components['node-theme'] = module.exports;

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Style' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select class=\"uk-form-width-large\" v-model=\"node.theme.style\" options=\"styles | themeStyles true\"></select>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\" v-if=\"node.type === 'page'\">\n            <span class=\"uk-form-label\">{{ 'Title' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" value=\"center-content\" v-model=\"node.theme.title_hide\"> {{ 'Hide Title' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-class\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.html_class\">\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Menubar' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" value=\"fixed-menu\" v-model=\"node.theme.fixed_menu\"> {{ 'Fixed menu' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Hero Image' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <p class=\"uk-form-controls-condensed\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme['hero-contrast']\"> {{ 'Invert colors to make the text look great on darker hero images.' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed uk-margin-bottom\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme['navbar-transparent']\"> {{ 'Make the navbar transparent and overlay the hero image.' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed uk-form-width-large\"><input-image source=\"{{@ node.theme['hero-image'] }}\"></input-image></p>\n                <p class=\"uk-form-help-block\">{{ 'Select a background image for the hero position.' | trans }}</p>\n            </div>\n        </div>\n\n    </div>";

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports = {
	    themeStyles: function (value, select) {
	        var vm = this, options = select ? [{value: '', text: vm.$trans('- default style -')}] : [];
	        _.each(value, function (style) {
	            options.push({value: style, text: vm.$trans(_.startCase(style))});
	        });
	        return options;
	    }
	};

/***/ }

/******/ });