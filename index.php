<?php

return [

    'name' => 'bixblack',

    'type' => 'theme',

	'main' => 'Pagekit\\Bixie\\BixieBlackTheme',

	'autoload' => [

		'Pagekit\\Bixie\\' => 'src'

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
        'offcanvas' => 'Offcanvas'

    ],

    /**
     * Widget positions
     */
    'positions' => [

        'hero' => 'Hero',
        'top' => 'Top',
        'sidebar' => 'Sidebar',
        'bottom' => 'Bottom',
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
		'fixed_menu' => false,
		'hero-image' => '',
        'hero-contrast' => '',
        'navbar-transparent' => '',

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
        'fixed_menu' => false

    ],

    /**
     * Styles defaults
     */
    'styles' => [

        'default' => [
			'data' => [
				'scheme' => 'default',
				'fixed_menu' => 1
			]
		],
        'gold' => [
			'data' => [
				'scheme' => 'gold',
				'fixed_menu' => 0
			]
		]

    ],

	'routes' => [

		'/api/bixie' => [
			'name' => '@bixie/api',
			'controller' => [
				'Pagekit\\Bixie\\Controller\\BixieApiController',
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

        'view.system/site/admin/edit' => function ($event, $view) {
            $view->script('node-theme', 'theme:app/bundle/node-theme.js', 'site-edit');
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

            $classes = [
                'navbar' => 'tm-navbar'
            ];

            $sticky = [
                'media' => 767,
                'showup' => true,
                'animation' => 'uk-animation-slide-top'
            ];

			if (empty($event['style'])) {
				$event['style'] = $event['default_style'];
			}

            $classes['sticky'] = $event['fixed_menu'] ? 'data-uk-sticky=\''.json_encode($sticky).'\'' : '';

            $event->addParameters(['classes' => $classes]);

        }

    ]

];
