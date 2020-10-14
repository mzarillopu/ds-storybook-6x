import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
    tag: 'puds-menu-toggle'
})
export class PrincetonDesignMenuToggle {

    @Prop() isExpanded: boolean = false;
    @Event() toggle: EventEmitter<boolean>;

    toggleMenu() {
        this.isExpanded = !this.isExpanded;
        this.toggle.emit(this.isExpanded);
    }

    render() {
        return (
            <button class="puds-menu-toggle" type="button" aria-controls="menu-container" aria-expanded={ this.isExpanded } aria-label="Toggle navigation menu" onClick={() => this.toggleMenu() }>Menu</button>
        );
    }
}
