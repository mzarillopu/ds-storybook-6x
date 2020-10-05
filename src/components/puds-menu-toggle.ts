import {LitElement, html, css, property} from 'lit-element';

export class PrincetonDesignMenuToggle extends LitElement {

    static get styles() {
        return css`
            .puds-menu-toggle {
              font-family: Roboto, sans-serif;
              font-size: 16px;
              background-color: transparent;
              border: none;
              text-transform: uppercase;
              font-weight: bold;
              height: 32px;
              padding: 4px;
            }
            .puds-menu-toggle:after {
              display: inline-block;
              content: '';
              background-size: 18px 18px;
              background-repeat: no-repeat;
              background-position: -3px 3px;
              width: 18px;
              height: 18px;
            }
            .puds-menu-toggle[aria-expanded="false"]:after {
              background-image: url(../icons/menu-24px.svg);
            }
            .puds-menu-toggle[aria-expanded="true"]:after {
              background-image: url(../icons/close-24px.svg);
            }
        `;
    }

    private _expanded = false;

    @property()
    get expanded(): any { return this._expanded; }
    set expanded(newExpanded: any) {
        let oldExpanded = this._expanded;
        this._expanded = newExpanded;
        this.requestUpdate('expanded', oldExpanded);
    }

    constructor() {
        super();
    }

    toggleMenu() {
        this.expanded = !this.expanded;
    }

    render() {
        return html`
            <button class="puds-menu-toggle" type="button" aria-controls="menu-container" aria-expanded="${ this.expanded }" aria-label="Toggle navigation" @click="${() => { this.toggleMenu() }}">
                Menu
            </button>            
        `;
    }
}
