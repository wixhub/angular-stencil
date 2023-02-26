import { APP_INITIALIZER, NgModule } from '@angular/core';
//import { ComponentLibraryComponent } from './component-library.component';

import { defineCustomElements } from 'stencil-library/loader';

//import { DIRECTIVES } from './stencil-generated';
import { CounterComponent, TextComponent } from './stencil-generated/components';

defineCustomElements(window);

@NgModule({
  declarations: [
    //...DIRECTIVES
    CounterComponent,
    TextComponent,
  ],
  imports: [
  ],
  exports: [
    //...DIRECTIVES
    CounterComponent,
    TextComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ]
})
export class ComponentLibraryModule { }
