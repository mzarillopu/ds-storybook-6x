import { html } from 'lit-html';
import { PrincetonDesignCombobox } from '../dist/index.js';
import { PrincetonDesignAutocomplete } from '../dist/index.js';
import { action } from '@storybook/addon-actions';

// ------------ NOTE: For some reason the following references appear to be necessary to make sure that the components get included in the compiled source
// ------------ Without the references, the components do not get registered in the browser.
console.log(PrincetonDesignAutocomplete);
console.log(PrincetonDesignCombobox);
// -----------------------------------------------------------

export default {
    title: 'Components/Form Inputs',
    argTypes: {
        optionSelected: { action: 'option selected' },
    },
};

export const TextInput = (args) => html`
    <label class="puds-label" for="my-input">${ args.label }</label>
    <input class="puds-input" id="my-input" type="text" placeholder="Placeholder" value="${ args.value }" />

    <label class="puds-label" for="my-input2">${ args.label } - Focused</label>
    <input class="puds-input puds-focus" id="my-input2" type="text" placeholder="Placeholder" value="${ args.value }" />

    <label class="puds-label" for="my-input3">${ args.label } - With Error</label>
    <input class="puds-input puds-input--error" id="my-input3" type="text" placeholder="Placeholder" value="${ args.value }" />

    <label class="puds-label" for="my-input4">${ args.label } - Required (Required)</label>
    <input class="puds-input" id="my-input4" type="text" placeholder="Placeholder" required value="${ args.value }" />
`;
TextInput.args = {
    label: "Label",
    value: ""
};

export const MultilineTextInput = (args) => html`
    <label class="puds-label" for="my-input4">${ args.label }</label>
    <textarea class="puds-input" id="my-input4" type="text">${ args.value }</textarea>
`;
MultilineTextInput.args = {
    label: "Label",
    value: ""
}

export const Checkbox = (args) => html`
    <fieldset class="puds-fieldset">
        <legend class="puds-sr-only">${ args.legend }</legend>
        <div class="puds-checkbox">
            <input class="puds-checkbox__input" type="checkbox" id="apple" type="checkbox" checked />
            <label class="puds-checkbox__label" for="apple">Apple</label>
        </div>
        <div class="puds-checkbox">
            <input class="puds-checkbox__input" type="checkbox" id="orange" type="checkbox" />
            <label class="puds-checkbox__label" for="orange">Orange</label>
        </div>
        <div class="puds-checkbox">
            <input class="puds-checkbox__input" type="checkbox" id="strawberry" type="checkbox" disabled />
            <label class="puds-checkbox__label" for="strawberry">Strawberry</label>
        </div>
        <div class="puds-checkbox">
            <input class="puds-checkbox__input" type="checkbox" id="watermelon" type="checkbox" disabled checked />
            <label class="puds-checkbox__label" for="watermelon">Watermelon</label>
        </div>
    </fieldset>
    <p>TODO: Doesn't currently display properly in Firefox.</p>
`;
Checkbox.args = {
    legend: "Types of Fruit",
}

export const ComboBox = () => html`
    <puds-combobox id="mycombo"></puds-combobox>
    <script id="initscript">
        (function() {
            let options = [
                { name: 'Apple', value: 'Apple-Value', key: 'Apple-Value' },
                { name: 'Banana', value: 'Banana-Value', key: 'Banana-Value' },
                { name: 'Orange', value: 'Orange-Value', key: 'Orange-Value' },
            ];
            let combo = document.getElementById("mycombo");
            console.log('found combo?' + combo);
            console.log(combo);
            combo.options = options;            
        })();
    </script>
`;

function generateAutocompleteResults(e) {

    let options = [
        { name: 'Apple (' + e.detail + ')', value: 'Apple-Value', key: 'Apple-Value' },
        { name: 'Banana (' + e.detail + ')', value: 'Banana-Value', key: 'Banana-Value' },
        { name: 'Orange (' + e.detail + ')', value: 'Orange-Value', key: 'Orange-Value' },
    ];

    e.target.options = options;
}

function optionSelected(e) {
    console.log('option-selected');
    console.log(e);
}

export const Autocomplete = (args) => html`
    <puds-autocomplete id="myauto" @search-changed="${(e) => generateAutocompleteResults(e) }" @option-selected="${ args.optionSelected }"></puds-autocomplete>
`;

export const AutocompleteControls = (args) => html`
    <puds-autocomplete id="${args.id}"></puds-autocomplete>
`;

AutocompleteControls.args = {
    id: 'myauto'
};
