import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Container */
import { WorkContainer } from './container/work.component';

/* Components */
import { LayoutDefaultComponent } from '../../shared/layout-default/layout-default.component';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent,
    children: [
      { path: 'work', component: WorkContainer }
    ]
  },
  { path: '**', redirectTo: 'work' }
];

const components = [
  WorkContainer
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

export class WorkModule {}
