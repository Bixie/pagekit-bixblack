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

	module.exports = __webpack_require__(10)
	module.exports.template = __webpack_require__(11)


/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = {

	        section: {
	            label: 'Appearance',
	            priority: 90
	        },

	        props: ['widget', 'config']

	    };

	    window.Widgets.components['widget-theme'] = module.exports;

/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Title' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"center-content\" v-model=\"widget.theme.title_hide\"> {{ 'Hide Title' | trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"form-theme-badge\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"form-theme-badge\" class=\"uk-form-width-large\" type=\"text\" v-model=\"widget.theme.html_class\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"form-theme-panel\" class=\"uk-form-label\">{{ 'Panel Style' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"form-theme-panel\" class=\"uk-form-width-large\" v-model=\"widget.theme.panel\">\r\n                    <option value=\"\">{{ 'None' | trans }}</option>\r\n                    <option value=\"uk-panel-box\">{{ 'Box' | trans }}</option>\r\n                    <option value=\"uk-panel-box uk-panel-box-primary\">{{ 'Box Primary' | trans }}</option>\r\n                    <option value=\"uk-panel-box uk-panel-box-secondary\">{{ 'Box Secondary' | trans }}</option>\r\n                    <option value=\"uk-panel-header\">{{ 'Header' | trans }}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"form-theme-title-size\" class=\"uk-form-label\">{{ 'Title Size' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"form-theme-title-size\" class=\"uk-form-width-large\" v-model=\"widget.theme.title_size\">\r\n                    <option value=\"uk-panel-title\">{{ 'Default' | trans }}</option>\r\n                    <option value=\"uk-h1 uk-margin-top-remove\">{{ 'H1' | trans }}</option>\r\n                    <option value=\"uk-h2 uk-margin-top-remove\">{{ 'H2' | trans }}</option>\r\n                    <option value=\"uk-h3 uk-margin-top-remove\">{{ 'H3' | trans }}</option>\r\n                    <option value=\"uk-h4 uk-margin-top-remove\">{{ 'H4' | trans }}</option>\r\n                    <option value=\"uk-heading-large uk-margin-top-remove\">Extra Large</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Alignment' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"center-content\" v-model=\"widget.theme.alignment\"> {{ 'Center the title and content.' | trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ }

/******/ });