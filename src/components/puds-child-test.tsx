import { Component, Prop, Element, h } from '@stencil/core';

@Component({
    tag: 'puds-child-test'
})
export class PrincetonDesignMenuToggle {

    @Element() el: HTMLElement;

    @Prop() isExpanded: boolean = false;
    @Prop() options: string[] = [];

    connectedCallback() {
        let nodes = this.el.querySelectorAll<Element>('puds-child');
        nodes.forEach(node => {this.options.push(node.getAttribute('name'))});
    }

    render() {
        return (
            <ul>
                {this.options.map((option) =>
                    <li>{option}</li>
                )}
            </ul>
        );
    }
}
