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

	            save: function (e) {
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

	module.exports = "<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\r\n        <div data-uk-margin>\r\n            <h2 class=\"uk-margin-remove\">{{ 'Theme' | trans }}</h2>\r\n        </div>\r\n        <div data-uk-margin>\r\n            <button class=\"uk-button uk-button-primary\" v-on=\"click: save\">{{ 'Save' | trans }}</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"uk-form uk-form-horizontal\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Default style' | trans }}</label>\r\n\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-form-width-large\" v-model=\"config.default_style\"\r\n                        options=\"styles | themeStyles\"></select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Logo phone' | trans }}</label>\r\n\r\n            <div class=\"uk-form-controls uk-form-width-large\">\r\n                <input-image source=\"{{@ config.logo_small }}\"></input-image>\r\n                <p class=\"uk-form-help-block\">{{ 'This logo will be shown in the navbar on phones.' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Menu' | trans }}</span>\r\n\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"center-content\" v-model=\"config.fixed_menu\"> {{ 'Fixed Menu' |\r\n                    trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"form-main_menu_depth\" class=\"uk-form-label\">{{ 'Main menu depth' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"form-main_menu_depth\" class=\"uk-form-width-large\" v-model=\"config.main_menu_depth\" number>\r\n                    <option value=\"1\">1</option>\r\n                    <option value=\"2\">2</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Copyright text' | trans }}</span>\r\n\r\n            <div class=\"uk-form-controls\">\r\n                <v-editor id=\"form-intro\" value=\"{{@ config.copyright }}\"\r\n                          options=\"{{ {markdown : false, height: 150} }}\"></v-editor>\r\n            </div>\r\n        </div>\r\n    </div>";

/***/ }
/******/ ]);