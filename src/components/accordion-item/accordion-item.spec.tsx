import { newSpecPage } from '@stencil/core/testing';
import { AccordionItem } from './accordion-item';

describe('emc-accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionItem],
      html: `<emc-accordion-item></emc-accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <emc-accordion-item>
        <button aria-expanded="false" class="emc-accordion__button" id="undefined__btn" role="button"></button>
        <div aria-hidden="true" aria-labelledby="undefined__btn" class="emc-accordion__content" role="region" tabindex="0"></div>
      </emc-accordion-item>
    `);
  });
});
