import { newE2EPage } from '@stencil/core/testing';

describe('emc-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<emc-accordion></emc-accordion>');

    const element = await page.find('emc-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
