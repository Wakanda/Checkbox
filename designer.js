(function(Checkbox) {
    "use strict";

    Checkbox.setWidth(16);
    Checkbox.setHeight(16);

    Checkbox.addEvents({
        'name':'blur',
        'category':'Focus Events'
    },{ 
        'name':'focus',
        'category':'Focus Events'
    },{ 
        'name':'click', 
        'category':'Mouse Events' 
    },{ 
        'name':'mousedown', 
        'category':'Mouse Events'
    },{ 
        'name':'mouseout',
         'category':'Mouse Events'
    },{ 
        'name':'mouseover',
        'category':'Mouse Events'
    },{ 
        'name':'mouseup',
        'category':'Mouse Events'
    });

    Checkbox.addLabel({
        position: 'right',
        description: 'Label for widget'
    });

    // disable click
    Checkbox.doAfter('init', function() {
        $(this.node).off('change', this._changeHandler);
        $(this.node).on('change', function() {
            this.node.checked = this.value();
        }.bind(this));
    });

    Checkbox.setPanelStyle({
        'fClass': true, //This property is for the design panel
        'text': false,
        'textShadow': false,
        'dropShadow': false, 
        'innerShadow': false,
        'background': false,
        'border': false,
        'sizePosition': true,
        'label': true,
        'disabled': ['width','height']
    });

});
