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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4)
	module.exports.template = __webpack_require__(6)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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

	        filters: __webpack_require__(5)

	    };

	    window.Site.components['node-theme'] = module.exports;

/***/ },
/* 5 */
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Style' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-form-width-large\" v-model=\"node.theme.style\" options=\"styles | themeStyles true\"></select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\" v-if=\"node.type === 'page'\">\r\n            <span class=\"uk-form-label\">{{ 'Title' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"center-content\" v-model=\"node.theme.title_hide\"> {{ 'Hide Title' | trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"form-class\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.html_class\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Menubar' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"fixed-menu\" v-model=\"node.theme.fixed_menu\"> {{ 'Fixed menu' | trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Hero Image' | trans }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <p class=\"uk-form-controls-condensed\">\r\n                    <label><input type=\"checkbox\" v-model=\"node.theme['hero-contrast']\"> {{ 'Invert colors to make the text look great on darker hero images.' | trans }}</label>\r\n                </p>\r\n                <p class=\"uk-form-controls-condensed uk-margin-bottom\">\r\n                    <label><input type=\"checkbox\" v-model=\"node.theme['navbar-transparent']\"> {{ 'Make the navbar transparent and overlay the hero image.' | trans }}</label>\r\n                </p>\r\n                <p class=\"uk-form-controls-condensed uk-form-width-large\"><input-image source=\"{{@ node.theme['hero-image'] }}\"></input-image></p>\r\n                <p class=\"uk-form-help-block\">{{ 'Select a background image for the hero position.' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ }
/******/ ]);