import { newSpecPage } from '@stencil/core/testing';
import { PudsAccordion } from './puds-accordion';

describe('puds-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PudsAccordion],
      html: `<puds-accordion></puds-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <puds-accordion>
        <div class="puds-accordion" role="region"></div>
      </puds-accordion>
    `);
  });
});