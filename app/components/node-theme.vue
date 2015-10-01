<template>

    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select class="uk-form-width-large" v-model="node.theme.style" options="styles | themeStyles true"></select>
            </div>
        </div>

        <div class="uk-form-row">
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
            <label class="uk-form-label">{{ 'Sidebar' | trans }}</label>
            <div class="uk-form-controls">
                <select class="uk-form-width-small" v-model="node.theme.sidebar_position">
                    <option value="right">{{ 'Right' | trans }}</option>
                    <option value="left">{{ 'Left' | trans }}</option>
                </select>
                <select class="uk-form-width-small uk-margin-small-left" v-model="node.theme.sidebar_width">
                    <option value="1-4">{{ '25%' | trans }}</option>
                    <option value="1-3">{{ '33%' | trans }}</option>
                    <option value="1-2">{{ '50%' | trans }}</option>
                </select>
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
            this.Bixie = this.$resource('api/bixieblack/:task');
            this.Bixie.query({task: 'styles'}, function (data) {
                this.$set('styles', data);
            })
        },

        filters: require('../lib/filters')

    };

    window.Site.components['node-theme'] = module.exports;

</script>
