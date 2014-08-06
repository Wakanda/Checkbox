WAF.define('CheckBox', ['waf-core/widget'], function(widget) {
    "use strict";

    var CheckBox = widget.create('CheckBox', {
        tagName: 'input',
        value: widget.property({
            type: 'boolean',
            defaultValue: function() {
                return this.node.checked;
            }
        }),
        init: function() {
            this.node.type = 'CheckBox';
            this.node.checked = this.value();
            var subscriber = this.value.onChange(function() {
                this.node.checked = this.value();
            });

            $(this.node).on('change', function() {
                subscriber.pause();
                this.value(this.node.checked);
                subscriber.resume();
            }.bind(this));
        }
    });

    return CheckBox;
});
