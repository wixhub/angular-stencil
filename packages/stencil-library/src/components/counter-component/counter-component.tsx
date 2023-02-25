import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {
    /**
   * The button text
   */
    @Prop() btnText: string;

    /**
     * The color
     */
    @Prop() color: string;
  
    /**
     * The counter
     */
    @State() counter: number = 0;

    increase() {
      this.counter++;
    }

  render() {
    return (
      <Host>
        <slot></slot>
        <button onClick={() => this.increase()}>{this.btnText}</button>
      </Host>
    );
  }

}
