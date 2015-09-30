<template>

    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
        <div data-uk-margin>
            <h2 class="uk-margin-remove">{{ 'Theme' | trans }}</h2>
        </div>
        <div data-uk-margin>
            <button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>
        </div>
    </div>

    <div class="uk-form uk-form-horizontal">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Default style' | trans }}</label>

            <div class="uk-form-controls">
                <select class="uk-form-width-large" v-model="config.default_style"
                        options="styles | themeStyles"></select>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Logo phone' | trans }}</label>

            <div class="uk-form-controls uk-form-width-large">
                <input-image source="{{@ config.logo_small }}"></input-image>
                <p class="uk-form-help-block">{{ 'This logo will be shown in the navbar on phones.' | trans }}</p>
            </div>
        </div>

        <div class="uk-form-row">
            <span class="uk-form-label">{{ 'Menu' | trans }}</span>

            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="checkbox" value="center-content" v-model="config.fixed_menu"> {{ 'Fixed Menu' |
                    trans }}</label>
            </div>
        </div>

        <div class="uk-form-row">
            <span class="uk-form-label">{{ 'Copyright text' | trans }}</span>

            <div class="uk-form-controls">
                <v-editor id="form-intro" value="{{@ config.copyright }}"
                          options="{{ {markdown : false, height: 150} }}"></v-editor>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Theme',
            icon: 'pk-icon-large-brush',
            priority: 15
        },

        data: function () {
            return _.merge(window.$theme, window.$bixie);
        },

        filters: require('../lib/filters'),

        methods: {

            save: function (e) {
                e.preventDefault();

                var config = _.omit(this.config, ['positions', 'menus', 'widget']);

                this.$http.post('admin/system/settings/config', {name: this.name, config: config}, function () {
                    UIkit.notify(this.$trans('Settings saved.'), '');
                }).error(function (data) {
                    UIkit.notify(data, 'danger');
                });

            }

        }

    };

    window.Site.components['site-theme'] = module.exports;

</script>
