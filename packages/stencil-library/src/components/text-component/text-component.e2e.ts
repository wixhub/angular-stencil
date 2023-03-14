import { newE2EPage } from '@stencil/core/testing';

describe('text-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<text-component></text-component>');
    const element = await page.find('text-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<text-component></text-component>');
    const component = await page.find('text-component');
    const element = await page.find('text-component >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('text', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);

    component.setProperty('text', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Quincy`);

    component.setProperty('text', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Earl`);
  });
});
