<div class="uk-grid">
    <div class="uk-width-medium-1-4">
		<ul class="uk-tab uk-tab-left" data-uk-tab="{connect:'#feature-switcher'}">
			<?php foreach ($widgets as $widget) : ?>
			<li><a href="#"><?= $widget->title ?></a></li>
			<?php endforeach ?>
		</ul>
	</div>
    <div class="uk-width-medium-3-4">
		<ul id="feature-switcher" class="uk-switcher">
			<?php foreach ($widgets as $widget) : ?>
				<li>
					<div class="uk-panel <?= $widget->theme['panel'] ?><?= $widget->theme['alignment'] ? ' uk-text-center' : '' ?>">

						<?php if (!$widget->theme['title_hide']) : ?>
							<h3 class="<?= $widget->theme['title_size'] ?>"></h3>
						<?php endif ?>

						<?= $widget->get('result') ?>

					</div>
				</li>

			<?php endforeach ?>
		</ul>
    </div>
</div>
