(function(CheckBox) {
    "use strict";

    CheckBox.setWidth(16);
    CheckBox.setHeight(16);

    CheckBox.addStates('hover', 'active', 'selected', 'focus', 'disabled');

    CheckBox.addEvents({
        'name':'blur',
        'category':'Focus Events'
    },{ 
        'name':'change',
        'category':'Focus Events'
    },{ 
        'name':'focus',
        'category':'Focus Events'
    },{ 
        'name':'click', 
        'category':'Mouse Events' 
    },{ 
        'name':'dblclick', 
        'description':'On Double Click',
        'category':'Mouse Events'
    },{ 
        'name':'mousedown', 
        'description':'On Mouse Down',
        'category':'Mouse Events'
    },{ 
        'name':'mouseout',
        'description':'On Mouse Out',
         'category':'Mouse Events'
    },{ 
        'name':'mouseover',
        'description':'On Mouse Over',
        'category':'Mouse Events'
    },{ 
        'name':'mouseup',
        'description':'On Mouse Up',
        'category':'Mouse Events'
    });

    CheckBox.addLabel({
        'position': 'right'
    });

    // disable click
    CheckBox.doAfter('init', function() {
        $(this.node).off('change', this._changeHandler);
        $(this.node).on('change', function() {
            this.node.checked = this.value();
        }.bind(this));
    });
});
