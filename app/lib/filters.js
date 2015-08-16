module.exports = {
    themeStyles: function (value, select) {
        var vm = this, options = select ? [{value: '', text: vm.$trans('- default style -')}] : [];
        _.each(value, function (style) {
            options.push({value: style, text: vm.$trans(_.startCase(style))});
        });
        return options;
    }
};