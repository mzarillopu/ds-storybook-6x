import { Component, ComponentInterface, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'emc-accordion-item'
})
export class AccordionItem implements ComponentInterface {

  @Prop() itemId: string;
  @Prop() itemTitle: string;

  btnEl!: HTMLButtonElement;
  regionEl!: HTMLDivElement;

  @Watch('itemId')
  validateId(newId: string) {
    const isBlank = typeof newId !== 'string' || newId === '';
    if (isBlank) {
      throw new Error('itemId is required');
    }
  }

  toggleMenuItem() {
    if (this.btnEl.getAttribute('aria-expanded') === 'false') {
      this.btnEl.setAttribute('aria-expanded', 'true');
    } else {
      this.btnEl.setAttribute('aria-expanded', 'false');
    }
    if (this.regionEl.hasAttribute('aria-hidden')) {
      this.regionEl.removeAttribute('aria-hidden');
    } else {
      this.regionEl.setAttribute('aria-hidden', 'true');
    }
  }

  render() {
    return ([
        <button id={ this.itemId + '__btn'}
                class="emc-accordion__button"
                aria-expanded="false"
                role="button"
                onClick={ () => this.toggleMenuItem() }
                ref={(el) => this.btnEl = el as HTMLInputElement}>{ this.itemTitle }</button>,
        <div role="region"
             aria-hidden="true"
             aria-labelledby={ this.itemId + '__btn'}
             tabindex="0"
             class="emc-accordion__content"
             ref={(el) => this.regionEl = el as HTMLDivElement}>
          <slot />
        </div>
    ]);
  }

}
