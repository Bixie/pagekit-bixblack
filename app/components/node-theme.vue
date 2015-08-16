<template>

    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select class="uk-form-width-large" v-model="node.theme.style" options="styles | themeStyles true"></select>
            </div>
        </div>

        <div class="uk-form-row" v-if="node.type === 'page'">
            <span class="uk-form-label">{{ 'Title' | trans }}</span>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="checkbox" value="center-content" v-model="node.theme.title_hide"> {{ 'Hide Title' | trans }}</label>
            </div>
        </div>

        <div class="uk-form-row">
            <label for="form-class" class="uk-form-label">{{ 'HTML Class' | trans }}</label>
            <div class="uk-form-controls">
                <input id="form-class" class="uk-form-width-large" type="text" v-model="node.theme.html_class">
            </div>
        </div>

        <div class="uk-form-row">
            <span class="uk-form-label">{{ 'Menubar' | trans }}</span>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="checkbox" value="fixed-menu" v-model="node.theme.fixed_menu"> {{ 'Fixed menu' | trans }}</label>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Hero Image' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <p class="uk-form-controls-condensed">
                    <label><input type="checkbox" v-model="node.theme['hero-contrast']"> {{ 'Invert colors to make the text look great on darker hero images.' | trans }}</label>
                </p>
                <p class="uk-form-controls-condensed uk-margin-bottom">
                    <label><input type="checkbox" v-model="node.theme['navbar-transparent']"> {{ 'Make the navbar transparent and overlay the hero image.' | trans }}</label>
                </p>
                <p class="uk-form-controls-condensed uk-form-width-large"><input-image source="{{@ node.theme['hero-image'] }}"></input-image></p>
                <p class="uk-form-help-block">{{ 'Select a background image for the hero position.' | trans }}</p>
            </div>
        </div>

    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Appearance',
            priority: 90
        },

        props: ['node'],

        created: function () {
            this.Bixie = this.$resource('api/bixie/:task');
            this.Bixie.query({task: 'styles'}, function (data) {
                this.$set('styles', data);
            })
        },

        filters: require('../lib/filters')

    };

    window.Site.components['node-theme'] = module.exports;

</script>
