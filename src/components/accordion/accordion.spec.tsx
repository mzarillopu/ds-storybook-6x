import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from './accordion';

describe('emc-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<emc-accordion></emc-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <emc-accordion>
        <div class="emc-accordion" role="region"></div>
      </emc-accordion>
    `);
  });
});
