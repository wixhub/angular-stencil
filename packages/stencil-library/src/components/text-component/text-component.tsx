import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'text-component',
  styleUrl: 'text-component.css',
  shadow: true,
})
export class TextComponent {
  /**
   * The text
   */
  @Prop() text: string;

  render() {
    return <div>{this.text}</div>;
  }
}
