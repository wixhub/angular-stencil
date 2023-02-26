import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {
  /**
   * The properties
   */
  @Prop() btn_increase: string;
  @Prop() btn_decrease: string;
  @Prop() btn_reset: string;
  @Prop() text_color: string;

  /**
   * The counter
  */
  @State() counter = 0;

  @Event() didReset: EventEmitter;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
    this.didReset.emit(true);
  }

  render() {
    return (
      <Host>
        <slot name="help"></slot>
        <div class="row">
          <button onClick={() => this.increase()}>{this.btn_increase}</button>
          <label class={`counter ${this.text_color}`}>{this.counter}</label>
          <button onClick={() => this.decrease()}>{this.btn_decrease}</button>
        </div>
        <div><button onClick={() => this.reset()}>{this.btn_reset}</button></div>
      </Host>
    );
  }

}
