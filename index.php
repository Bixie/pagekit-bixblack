<?php

return [

	'name' => 'bixie/bixblack',

	'type' => 'theme',

	'main' => 'Bixie\\BixBlack\\BixieBlackTheme',

	'autoload' => [

		'Bixie\\BixBlack\\' => 'src'

	],

	/**
	 * Resourcessda
	 */
	'resources' => [

		'theme:' => '',
		'views:' => 'views'

	],

	/**
	 * Menu positions
	 */
	'menus' => [

		'main' => 'Main',
		'footer' => 'Footer',
		'offcanvas' => 'Offcanvas'

	],

	/**
	 * Widget positions
	 */
	'positions' => [

		'header' => 'Header',
		'feature' => 'Feature',
		'top-1' => 'Top 1',
		'top-2' => 'Top 2',
		'content-top' => 'Content top',
		'sidebar' => 'Sidebar',
		'content-bottom' => 'Content bottom',
		'bottom-1' => 'Bottom 1',
		'bottom-2' => 'Bottom 2',
		'footer' => 'Footer',
		'offcanvas' => 'Offcanvas'

	],

	/**
	 * Node defaults
	 */
	'node' => [

		'style' => '',
		'title_hide' => false,
		'html_class' => '',
		'sidebar_position' => 'right',
		'sidebar_width' => '1-4'

	],

	/**
	 * Widget defaults
	 */
	'widget' => [

		'title_hide' => false,
		'html_class' => '',
		'panel' => '',
		'title_size' => 'uk-panel-title',
		'alignment' => ''

	],

	/**
	 * Settings url
	 */
	'settings' => '@site/settings#site-theme',

	/**
	 * Configuration defaults
	 */
	'config' => [

		'default_style' => 'default',
		'copyright' => '<p>Powered by Pagekit - Designed with UIkit</p>',
		'fixed_menu' => false,
		'main_menu_depth' => 2,
		'logo_small' => ''

	],

	'routes' => [

		'/api/bixieblack' => [
			'name' => '@bixieblack/api',
			'controller' => [
				'Bixie\\BixBlack\\Controller\\BixieApiController',
			]
		]

	],

	/**
	 * Events
	 */
	'events' => [

		'view.system/site/admin/settings' => function ($event, $view) use ($app) {
			$view->script('site-theme', 'theme:app/bundle/site-theme.js', 'site-settings');
			$view->data('$bixie', [
				'styles' => $this->getStyles()
			]);
			$view->data('$theme', $this);
		},

		'view.system/site/admin/edit' => function ($event, $view) use ($app) {
			$view->script('node-theme', 'theme:app/bundle/node-theme.js', 'site-edit');
			$view->data('$bixie' , [
				'styles' => $this->getStyles()
			]);
		},

		'view.system/widget/edit' => function ($event, $view) {
			$view->script('widget-theme', 'theme:app/bundle/widget-theme.js', 'widget-edit');
		},

		/**
		 * Custom markup calculations based on theme settings
		 */
		'view.layout' => function ($event, $view) use ($app) {

			if ($app->isAdmin()) {
				return;
			}
			$reverse = ['1-4' => '3-4', '1-3' => '2-3', '1-2' => '1-2'];
			$classes = [
				'mainwidth' => $view->position()->exists('sidebar') ? 'uk-width-medium-' . $reverse[$event['sidebar_width']]: 'uk-width-1-1',
				'sidebarwidth' => 'uk-width-medium-' . $event['sidebar_width']
			];
			if ($event['sidebar_position'] == 'left') {
				$classes['sidebarwidth'] .= ' uk-flex-order-first-medium';
			}

			$sticky = [
				'media' => 767,
				'showup' => true,
				'animation' => 'uk-animation-slide-top'
			];

			if (empty($event['style'])) {
				$event['style'] = $event['default_style'];
			}

			$classes['sticky'] = $event['fixed_menu'] ? 'data-uk-sticky=\'' . json_encode($sticky) . '\'' : '';

			$event->addParameters([
				'classes' => $classes
			]);

		}

	]

];
