<?php if ($root->getDepth() === 0) : ?>
<ul class="<?= implode(' ', (!empty($class) ? (array) $class : [])) ?>">
	<?php endif ?>

	<?php foreach ($root->getChildren() as $node) : ?>
		<li class="<?= $node->hasChildren() ? 'uk-parent' : '' ?><?= $node->get('active') ? ' uk-active' : '' ?>">
			<a href="<?= $node->getUrl() ?>"><?= $node->title ?></a>

			<?php if ($node->hasChildren() and !empty($depth) and $root->getDepth() < $depth) : ?>
				<ul class="uk-nav-sub">
					<?= $view->render('system/site/menu.php', ['root' => $node]) ?>
				</ul>
			<?php endif ?>
		</li>
	<?php endforeach ?>

	<?php if ($root->getDepth() === 0) : ?>
</ul>
<?php endif ?>