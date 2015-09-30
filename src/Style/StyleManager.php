<?php

namespace Bixie\BixBlack\Style;

use Pagekit\Application as App;

class StyleManager {

	/**
	 * @var App
	 */
	protected $app;

	static $styles;

	/**
	 * Styles constructor.
	 * @param App $app
	 */
	public function __construct (App $app) {
		$this->app = $app;
	}

	/**
	 * @return array
	 */
	public function getStyles () {
		if (!static::$styles) {
			$paths = glob($this->app->locator()->get('theme:styles') . '/*/style.less', GLOB_NOSORT) ?: [];

			static::$styles = ['default'];
			foreach ($paths as $p) {
				static::$styles[] = basename(dirname($p));
			}
		}
		return static::$styles;
	}


}