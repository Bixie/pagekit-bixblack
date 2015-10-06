<?php foreach ($widgets as $widget) :
	$widget = $app['theme']->checkWidget($widget);
	if (!$widget->get('theme_show')) continue;
	?>

	<?= $widget->get('result') ?>

<?php endforeach ?>
