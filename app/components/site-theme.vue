<template>

    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
        <div data-uk-margin>
            <h2 class="uk-margin-remove">{{ 'Theme' | trans }}</h2>
        </div>
        <div data-uk-margin>
            <button class="uk-button uk-button-primary" @click.prevent="save">{{ 'Save' | trans }}</button>
        </div>
    </div>

    <div class="uk-form uk-form-horizontal">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Default style' | trans }}</label>

            <div class="uk-form-controls">
                <select class="uk-form-width-large" v-model="config.default_style">
                    <option v-for="option in styles | themeStyles" :value="option.value">{{ option.text }}</option>
                </select>
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
                <label><input type="checkbox" value="center-content"
                              v-model="config.fixed_menu"> {{ 'Fixed Menu' | trans }}</label>
            </div>
        </div>

        <div class="uk-form-row">
            <label for="form-main_menu_depth" class="uk-form-label">{{ 'Main menu depth' | trans }}</label>
            <div class="uk-form-controls">
                <select id="form-main_menu_depth" class="uk-form-width-large" v-model="config.main_menu_depth" number>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        </div>

        <div class="uk-form-row">
            <span class="uk-form-label">{{ 'Copyright text' | trans }}</span>

            <div class="uk-form-controls">
                <v-editor id="form-intro" :value.synv="config.copyright"
                          :options="{markdown : false, height: 150}"></v-editor>
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

            save: function () {

                var config = _.omit(this.config, ['positions', 'menus', 'widget']);

                this.$http.post('admin/system/settings/config', {name: this.name, config: config}).then(function () {
                    this.$notify('Settings saved');
                }, function (res) {
                    this.$notify(res.data, 'danger');
                });

            }

        }

    };

    window.Site.components['site-theme'] = module.exports;

</script>
