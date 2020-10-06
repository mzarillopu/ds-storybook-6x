import { newSpecPage } from '@stencil/core/testing';
import { PudsAccordionItem } from './puds-accordion-item';

describe('puds-accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PudsAccordionItem],
      html: `<puds-accordion-item></puds-accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <puds-accordion-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </puds-accordion-item>
    `);
  });
});
