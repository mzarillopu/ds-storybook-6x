import { newE2EPage } from '@stencil/core/testing';

describe('puds-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<puds-accordion></puds-accordion>');

    const element = await page.find('puds-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
