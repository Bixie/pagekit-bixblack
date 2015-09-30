<?php

namespace Bixie\BixBlack\Controller;

use Pagekit\Application as App;

/**
 * @Route("/", name="bixie")
 */
class BixieApiController {

	/**
	 * Access("theme: manage theme") //todo
	 * @Route("/styles", methods="GET")
	 * @Request({})
	 */
	public function stylesAction () {
		return App::theme()->getStyles();
	}

}
