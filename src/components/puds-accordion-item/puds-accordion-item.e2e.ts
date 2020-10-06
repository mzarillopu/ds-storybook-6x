import { newE2EPage } from '@stencil/core/testing';

describe('puds-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<puds-accordion-item></puds-accordion-item>');

    const element = await page.find('puds-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
