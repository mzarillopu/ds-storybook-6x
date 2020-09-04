import { LitElement, html, property, query } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

interface PudsNameValuePair {
    name: string;
    value: any;
    key: any;
}

export class PrincetonDesignAutocomplete extends LitElement {

    @query('#textbox') private textbox;
    @query('#listbox') private listbox;

    @property()
    disabled = false;

    private _value: any;
    private _focusedListItem: HTMLElement;

    @property()
    get value(): any { return this._value; }
    set value(newValue: any) {
        let oldValue = this._value;
        this._value = newValue;
        this.textbox.value = this._value ? this._value.name : null;
        this.requestUpdate('value', oldValue);
    }

    private _options: PudsNameValuePair[] = [];

    @property()
    get options(): PudsNameValuePair[] { return this._options; }
    set options(val: PudsNameValuePair[]) {
        let oldOptions = this._options;
        this._options = val || [];

        this.requestUpdate('options', oldOptions);
    }

    private _needsFocusUpdate = false;

    constructor() {
        super();
    }

    /**
     * When input in the textbox is changed, the listbox will be shown and we will trigger an event
     * so that external components can react to the change.
     *
     * @param val
     */
    onTextboxInput(val: string) {
        this.dispatchEvent(new CustomEvent("search-changed", { detail: val }));
        if (!this.isListBoxShown()) {
            this.showListBox();
        }
    }

    /**
     * The following key events will be handled:
     *
     * Escape - will close the listbox and reset the value to the previously selected value
     * ArrowDown - Will open the listbox
     *
     * @param event
     */
    onTextboxPress(event: KeyboardEvent) {
        if (event.key === "Escape") {
            this.hideListBox();
            // TODO: also put back whatever value was previously selected
        } else if (event.key === "ArrowDown") {
            if (!this.isListBoxShown()) {
                // TODO: should this only be shown if there are options available?
                this.showListBox();
            }
            // set focus
            if (!this._value) {
                // set focus to the first element
                let firstChild = this.listbox.querySelector(".puds-autocomplete__list-option:first-of-type");
                firstChild.tabIndex = 0;
                firstChild.focus();
                this._focusedListItem = firstChild;
            } else {
                // set focus to the 
            }
        }
    }

    onTextboxFocus() {
        // only show the list box if no value is currently selected and there is content entered into the textbox
        if (this.textbox.value != null && this.textbox.value != "" && this.value == null) {
            this.showListBox();
        }
    }

    isListBoxShown() {
        return this.listbox && !this.listbox.hasAttribute('hidden');
    }

    /**
     * What should trigger a list box to be shown?
     *
     * * Clicking into the text box when there are results to be shown.
     * * A "down-arrow" keydown typed into the text box (not "up-arrow", not left/right arrow, and not ESC)
     * * Typing into the text box (results will fill in as they are returned)
     */
    showListBox() {
        this.listbox.removeAttribute('hidden');
    }

    hideListBox() {
        this.listbox.setAttribute('hidden', '');
    }

    toggleListBox() {
        if (this.isListBoxShown()) {
            this.hideListBox();
        } else {
            this.showListBox();
        }
    }

    clearValue() {
        this.value = null;
        this.hideListBox();
    }

    listInput(event: KeyboardEvent) {

        if (event.key === "Escape") {

            // hide the list box

            this.hideListBox();

            // TODO: also put back whatever value was previously selected

            // set focus to the text box
            this.textbox.focus();

        } else if (event.key === "ArrowDown") {

            // move to next option in the list

            let nextListItem = this.getNextSibling(this._focusedListItem, ".puds-autocomplete__list-option");
            if (nextListItem) {
                this._focusedListItem.tabIndex = -1;
                nextListItem.tabIndex = 0;
                nextListItem.focus();
                this._focusedListItem = nextListItem;
            }

        } else if (event.key === "ArrowUp") {

            // move to previous option in the list

            let prevListItem = this.getPreviousSibling(this._focusedListItem, ".puds-autocomplete__list-option");
            if (prevListItem) {
                this._focusedListItem.tabIndex = -1;
                prevListItem.tabIndex = 0;
                prevListItem.focus();
                this._focusedListItem = prevListItem;
            } else {
                // close the list box
                this.hideListBox();
                this.textbox.focus();
            }
        } else if (event.key === "Enter") {

            console.log(this._focusedListItem);
            this.optionSelected(this._focusedListItem.valueObject)
        }
    }

    updated(changedProperties: any) {
        // TODO: update focus if requested
        if (this._needsFocusUpdate) {
            // set focus to first element
            this._needsFocusUpdate = false;
        }
    }

    itemClicked(nvp: PudsNameValuePair) {
        console.log(nvp);
        if (nvp) {
            this.optionSelected(nvp);
        }
    }

    optionSelected(nvp: PudsNameValuePair) {
        this._value = nvp;
        this.textbox.value = this._value.name;
        // clear the options since a value has been selected and we do not want arrow down to open the list box
        this.options = [];
        this.hideListBox();
        this.dispatchEvent(new CustomEvent("option-selected", { detail: nvp }));
    }

    private getNextSibling(elem: HTMLElement, selector: string): HTMLElement {

        // Get the next sibling element
        let sibling = elem.nextElementSibling;

        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return <HTMLElement>sibling;
            sibling = sibling.nextElementSibling
        }

    };

    private getPreviousSibling(elem: HTMLElement, selector: string): HTMLElement {

        // Get the next sibling element
        let sibling = elem.previousElementSibling;

        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return <HTMLElement>sibling;
            sibling = sibling.previousElementSibling
        }

    };

    render() {
        return html`
            <div class="puds-autocomplete" @keydown="${(e) => { e.stopPropagation(); }}">
                <input type="text" role="combobox" required="" 
                    aria-owns="fruit--list" 
                    aria-autocomplete="list" 
                    aria-describedby="fruit--assistiveHint" 
                    aria-expanded="false" 
                    autocapitalize="off" 
                    autocomplete="off" 
                    id="textbox" 
                    class="puds-autocomplete__input" 
                    aria-activedescendant=""
                    ?disabled="${ this.disabled }"
                    @keydown="${(e) => { this.onTextboxPress(e); e.stopPropagation(); }}"
                    @input="${(e) => { this.onTextboxInput(e.target.value); e.stopPropagation(); }}"
                    @focus="${() => { this.onTextboxFocus() }}"
                    >
                <span class="puds-autocomplete__clear-input__wrapper" tabindex="-1">
                    <button type="button" class="puds-autocomplete__clear-input" aria-label="Clear the select contents" @click="${() => { this.clearValue(); }}">&nbsp;</button>
                </span>
                <ul tabindex="-1" id="listbox" class="puds-autocomplete__list" role="listbox" hidden="">
                    ${ repeat(this.options, (option) => option.key,(option, idx) => 
                        html`
                            <li @keydown="${ (e) => { this.listInput(e); } }" @click="${ () => this.itemClicked(option) }" aria-selected="false" aria-setsize="${ this.options.length }" aria-posinset="${ idx + 1 }" id="autocomplete--list--option-${ idx }" class="puds-autocomplete__list-option" tabindex="-1" role="option" .valueObject="${ option }" data-value="${ option.value }">${ option.name }</li>
                        `)
                    }
                </ul>
                <div class="puds-autocomplete__status puds-sr-only" role="status"></div>
      
                <span id="autocomplete--assistiveHint" class="puds-sr-only">
                    When autocomplete results are available use up and down arrows to review and enter to select.
                    Touch device users, explore by touch or with swipe gestures.
                </span>
            </div>
        `;
    }
}
