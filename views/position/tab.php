<div class="uk-grid uk-grid-match uk-grid-collapse">
    <div class="uk-width-medium-1-4">
		<ul class="uk-tab uk-tab-left" data-uk-tab="{connect:'#feature-switcher'}">
			<?php foreach ($widgets as $widget) :
				$widget = $app['theme']->checkWidget($widget);
				if (!$widget->get('theme_show')) continue;
				?>
			<li class="uk-text-truncate"><a href="#"><?= $widget->title ?></a></li>
			<?php endforeach ?>
		</ul>
	</div>
    <div class="uk-width-medium-3-4">
		<ul id="feature-switcher" class="uk-switcher">
			<?php foreach ($widgets as $widget) :
				$widget = $app['theme']->checkWidget($widget);
				if (!$widget->get('theme_show')) continue;
				?>
				<li>
					<div class="uk-panel <?= $widget->theme['panel'] ?><?= $widget->theme['alignment'] ? ' uk-text-center' : '' ?>">

						<?= $widget->get('result') ?>

					</div>
				</li>

			<?php endforeach ?>
		</ul>
    </div>
</div>
