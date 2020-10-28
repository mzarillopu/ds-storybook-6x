import { newE2EPage } from '@stencil/core/testing';

describe('emc-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<emc-accordion-item></emc-accordion-item>');

    const element = await page.find('emc-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
