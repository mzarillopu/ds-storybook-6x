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
        <button aria-expanded="false" class="puds-accordion__button" id="undefined__btn" role="button"></button>
        <div aria-hidden="true" aria-labelledby="undefined__btn" class="puds-accordion__content" role="region" tabindex="0"></div>
      </puds-accordion-item>
    `);
  });
});
