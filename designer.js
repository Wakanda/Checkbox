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
    },{ 
        'name':'keydown',
        'category':'Keyboard Events'
    },{ 
        'name':'keyup',
        'category':'Keyboard Events'
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
