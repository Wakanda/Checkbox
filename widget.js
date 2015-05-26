WAF.define('Checkbox', ['waf-core/widget'], function(widget) {
    "use strict";

    var Checkbox = widget.create('Checkbox', {
        tagName: 'input',
        value: widget.property({
            type: 'boolean',
            description: 'Boolean defined by a datasource or static value',
            defaultValue: false
        }),
        disable: function() {
           this.$super('disable')();
           $(this.node).prop('disabled', true);
        },
        enable: function() {
           this.$super('enable')();
           $(this.node).prop('disabled', false);
        },
        init: function() {
            this.node.type = 'Checkbox';
            this.node.checked = this.value();
            this.node.setAttribute('type',this.node.getAttribute('type').toLowerCase());
            var subscriber = this.value.onChange(function() {
                this.node.checked = this.value();
            }.bind(this));

            this._changeHandler = function() {
                subscriber.pause();
                this.value(this.node.checked);
                subscriber.resume();
            }.bind(this);

            $(this.node).on('change', this._changeHandler);
        }
    });

    Checkbox.addTabIndex();

    return Checkbox;
});
