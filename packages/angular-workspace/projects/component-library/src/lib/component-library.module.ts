import { APP_INITIALIZER, NgModule } from '@angular/core';
//import { ComponentLibraryComponent } from './component-library.component';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';


@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    ...DIRECTIVES
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
