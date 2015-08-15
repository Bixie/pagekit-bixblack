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
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select class="uk-form-width-large" v-model="config.style" options="options.styles | themeStyles"></select>
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
            return window.$theme;
        },

        filters: {
            themeStyles: function (value) {
                var vm = this;
                return value.map(function (style) {
                    return {value: style, text: vm.$trans(_.startCase(style))}
                });
            }
        },

        methods: {


            save: function(e) {
                e.preventDefault();

                var config = _.omit(this.config, ['positions', 'menus', 'widget', 'styles']);

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
