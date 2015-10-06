<?php

namespace Bixie\BixBlack;

use Pagekit\Application as App;
use Pagekit\Module\Module;

class BixieBlackTheme extends Module {

	/**
	 * @var App
	 */
	protected $app;
	/**
	 * @var Style\StyleManager
	 */
	protected $styles;
	/**
	 * {@inheritdoc}
	 */
	public function main (App $app) {
		$this->app = $app;
		$this->styles = new Style\StyleManager($app);

	}

	public function checkWidget ($widget) {
		$show = empty($widget->theme['demo_style']) || $widget->theme['demo_style'] == $this->config('default_style');
		$widget->set('theme_show', $show);
		return $widget;
	}

	public function getStyles () {
		return $this->styles->getStyles();
	}
}
