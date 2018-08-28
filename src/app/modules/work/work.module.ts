import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Container */
import { WorkContainer } from './container/work.component';

/* Projects - Public */
import { WorkTemplateUbiquitel } from './project/public/ubiquitel/ubiquitel.component';
import { WorkTemplateRoygbiv } from './project/public/roygbiv/roygbiv.component';
import { WorkTemplateProtophone } from './project/public/protophone/protophone.component';

/* Components */
import { LayoutDefaultComponent } from '../../shared/layout-default/layout-default.component';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent,
    children: [
      { path: 'work', component: WorkContainer },

      // projects - public
      { path: 'work/ubiquitel', component: WorkTemplateUbiquitel },
      { path: 'work/roygbiv', component: WorkTemplateRoygbiv },
      { path: 'work/protophone', component: WorkTemplateProtophone }
    ]
  },
  { path: '**', redirectTo: 'work' }
];

const components = [
  WorkContainer,

  // projects - public
  WorkTemplateUbiquitel,
  WorkTemplateRoygbiv,
  WorkTemplateProtophone
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
  declarations: components,
  exports: components
})

export class WorkModule {}
