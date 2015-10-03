<!DOCTYPE html>
<html class="<?= $params['html_class'] ?>">
    <head>
		<base href="<?= $view->url()->get() ?>" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= $view->render('head') ?>
        <?php $view->style('theme', 'theme:css/theme.' . $params['style'] . '.css') ?>
        <?php $view->script('theme', 'theme:js/theme.js', 'uikit-sticky') ?>
    </head>
    <body>

		<div id="bix-header" class="uk-block uk-block-default uk-hidden-small">
			<div class="uk-container uk-container-center">

				<header class="uk-flex uk-flex-space-between">

					<?php if ($params['logo']): ?>
						<a class="uk-link-muted" href="<?= $view->url()->get() ?>">
							<img src="<?= $this->escape($params['logo']) ?>" alt="">
						</a>
					<?php endif ?>

					<?php if ($view->position()->exists('header')) : ?>
						<div>
							<?= $view->position('header', 'position/panel.php') ?>
						</div>
					<?php endif ?>

				</header>

			</div>
		</div>

        <?php if ($view->position()->exists('offcanvas') || $view->menu()->exists('main')) : ?>
        <div id="bix-navbar" <?= $classes['sticky'] ?>>
            <div class="uk-container uk-container-center">

                <nav class="uk-navbar">

					<?php if ($view->menu()->exists('main')) : ?>
                    <div class="uk-hidden-small">
                        <?= $view->menu('main', 'menu-navbar.php') ?>
                    </div>
                    <?php endif ?>

                    <?php if ($view->position()->exists('offcanvas') || $view->menu()->exists('offcanvas')) : ?>
                    <a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
                    <?php endif ?>

					<?php if ($params['logo_small']): ?>
						<a class="uk-navbar-brand uk-navbar-center uk-visible-small" href="<?= $view->url()->get() ?>">
							<img src="<?= $this->escape($params['logo_small']) ?>" alt="">
						</a>
					<?php endif ?>

				</nav>

            </div>
        </div>
        <?php endif ?>

        <?php if ($view->position()->exists('feature')) : ?>
        <div id="bix-feature" class="uk-block uk-block-default">
            <div class="uk-container uk-container-center">

                <section class="bix-feature">
                    <?= $view->position('feature', 'position/tab.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('top-1')) : ?>
        <div id="bix-top-2" class="uk-block uk-block-default">
            <div class="uk-container uk-container-center">

                <section class="uk-grid" data-uk-grid-margin>
                    <?= $view->position('top-1', 'position/stack.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

		<?php if ($view->position()->exists('top-2')) : ?>
			<div id="bix-top-1" class="uk-block uk-block-muted">
				<div class="uk-container uk-container-center">

					<section class="uk-grid uk-grid-match" data-uk-grid-margin>
						<?= $view->position('top-2', 'position/grid.php') ?>
					</section>

				</div>
			</div>
		<?php endif; ?>

		<div id="bix-main" class="uk-block uk-block-default">
            <div class="uk-container uk-container-center">

                <div class="uk-grid" data-uk-grid-match data-uk-grid-margin>

                    <main class="<?= $classes['mainwidth'] ?>">

						<?= $view->render('messages') ?>

						<?php if ($view->position()->exists('content-top')) : ?>
							<section id="bix-content-top" class="uk-grid" data-uk-grid-margin>
								<?= $view->position('content-top', 'position/stack.php') ?>
							</section>
						<?php endif ?>

                        <?= $view->position()->exists('content-top') ? '<div class="uk-grid-large'.($params['alignment'] ? ' uk-text-center' : '').'">' : '' ?>

                        <?= $view->render('content') ?>

                        <?= $view->position()->exists('content-top') ? '</div>' : '' ?>

                    </main>

                    <?php if ($view->position()->exists('sidebar')) : ?>

                    <aside class="<?= $classes['sidebarwidth'] ?>">

						<?= $view->position('sidebar', 'position/panel.php') ?>
                    </aside>

                    <?php endif ?>

                </div>

            </div>
        </div>

        <?php if ($view->position()->exists('bottom-1')) : ?>
        <div id="bix-bottom-1" class="tm-bottom uk-block uk-block-default">
            <div class="uk-container uk-container-center">

                <section class="uk-grid" data-uk-grid-margin>
                    <?= $view->position('bottom-1', 'position/stack.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('bottom-2')) : ?>
        <div id="bix-bottom-2" class="tm-bottom uk-block uk-block-muted">
            <div class="uk-container uk-container-center">

                <section class="uk-grid uk-grid-match" data-uk-grid-margin>
                    <?= $view->position('bottom-2', 'position/grid.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('footer') || $view->menu()->exists('footer')) : ?>
        <div id="tm-footer" class="tm-footer uk-block uk-block-secondary uk-contrast">
            <div class="uk-container uk-container-center uk-text-center">

				<?php if ($view->position()->exists('footer')) : ?>
					<section class="uk-grid uk-grid-match" data-uk-grid-margin>
						<?= $view->position('footer', 'position/grid.php') ?>
					</section>
				<?php endif ?>

				<?php if ($view->menu()->exists('footer')) : ?>
					<div class="<?php ($view->position()->exists('footer') ? 'uk-margin-large-top' : '') ?>">
						<?= $view->menu('footer', ['depth' => 1, 'class' => 'uk-subnav uk-subnav-line uk-flex-center']) ?>
					</div>
				<?php endif ?>

				<?php if ($copyright) : ?>
					<div class="uk-margin-top uk-text-muted">
						<?= $copyright ?>
					</div>
				<?php endif ?>

			</div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('offcanvas') || $view->menu()->exists('offcanvas')) : ?>
        <div id="offcanvas" class="uk-offcanvas">
            <div class="uk-offcanvas-bar">

                <?php if ($view->menu()->exists('offcanvas')) : ?>
                    <?= $view->menu('offcanvas', ['class' => 'uk-nav uk-nav-offcanvas']) ?>
                <?php endif ?>

                <?php if ($view->position()->exists('offcanvas')) : ?>
                    <?= $view->position('offcanvas', 'position/panel.php') ?>
                <?php endif ?>

            </div>
        </div>
        <?php endif ?>

        <?= $view->render('footer') ?>

    </body>
</html>
