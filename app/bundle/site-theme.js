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

	module.exports = __webpack_require__(7)
	module.exports.template = __webpack_require__(8)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	        section: {
	            label: 'Theme',
	            icon: 'pk-icon-large-brush',
	            priority: 15
	        },

	        data: function () {
	            return _.merge(window.$theme, window.$bixie);
	        },

	        filters: __webpack_require__(5),

	        methods: {

	            save: function(e) {
	                e.preventDefault();

	                var config = _.omit(this.config, ['positions', 'menus', 'widget']);

	                this.$http.post('admin/system/settings/config', {name: this.name, config: config}, function () {
	                    UIkit.notify(this.$trans('Settings saved.'), '');
	                }).error(function (data) {
	                    UIkit.notify(data, 'danger');
	                });

	            }

	        }

	    };

	    window.Site.components['site-theme'] = module.exports;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\r\n        <div data-uk-margin>\r\n            <h2 class=\"uk-margin-remove\">{{ 'Theme' | trans }}</h2>\r\n        </div>\r\n        <div data-uk-margin>\r\n            <button class=\"uk-button uk-button-primary\" v-on=\"click: save\">{{ 'Save' | trans }}</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"uk-form uk-form-horizontal\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Default style' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-form-width-large\" v-model=\"config.default_style\" options=\"styles | themeStyles\"></select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Menubar' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"fixed-menu\" v-model=\"config.fixed_menu\"> {{ 'Fixed menu' | trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>";

/***/ }
/******/ ]);