/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Components */
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
  imports: [
    // Import Only Modules
    CommonModule,
    RouterModule
  ],
  declarations: [
    // Components
    GlobalFooterComponent,
    GlobalNavComponent,
    LayoutDefaultComponent
  ],
  providers: [],
  exports: [
    // Components
    GlobalFooterComponent,
    GlobalNavComponent,
    LayoutDefaultComponent
  ]
})

export class SharedModule {}
