import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Container */
import { AboutContainer } from './container/about.component';

/* Components */
import { LayoutDefaultComponent } from '../../shared/layout-default/layout-default.component';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent,
    children: [
      { path: 'about', component: AboutContainer }
    ]
  }
];

const components = [
  AboutContainer
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
  declarations: components,
  exports: components
})

export class AboutModule {}
