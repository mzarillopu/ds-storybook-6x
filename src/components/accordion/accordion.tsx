import { Component, ComponentInterface, Element, h } from '@stencil/core';

@Component({
  tag: 'emc-accordion'
})
export class Accordion implements ComponentInterface {

  @Element() el: HTMLElement;

  connectedCallback() {
    this.initFromChildren();
  }

  componentShouldUpdate() {
    this.initFromChildren();
  }

  initFromChildren() {
    // let nodes = this.el.querySelectorAll<Element>('puds-accordion-item');
    // nodes.forEach(node => {this.options.push(node.getAttribute('name'))});
  }

  render() {
    return (
        <div class="emc-accordion" role="region">
            <slot />
        </div>
    );
  }

}
