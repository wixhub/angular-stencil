import { newSpecPage } from '@stencil/core/testing';
import { TextComponent } from './text-component';

describe('text-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TextComponent],
      html: '<text-component></text-component>',
    });
    expect(root).toEqualHtml(`
      <text-component>
        <mock:shadow-root>
          <div>
          </div>
        </mock:shadow-root>
      </text-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TextComponent],
      html: `<text-component text="Stencil"></text-component>`,
    });
    expect(root).toEqualHtml(`
      <text-component text="Stencil">
        <mock:shadow-root>
          <div>
            Stencil
          </div>
        </mock:shadow-root>
      </text-component>
    `);
  });
});
