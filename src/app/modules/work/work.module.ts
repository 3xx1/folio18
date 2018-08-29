import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Container */
import { WorkContainer } from './container/work.component';

/* Projects - Public */
import { WorkTemplateMagritte } from './project/public/magritte/magritte.component';
import { WorkTemplateUbiquitel } from './project/public/ubiquitel/ubiquitel.component';
import { WorkTemplateRoygbiv } from './project/public/roygbiv/roygbiv.component';
import { WorkTemplateProtophone } from './project/public/protophone/protophone.component';
import { WorkTemplateDropnotes } from './project/public/dropnotes/dropnotes.component';
import { WorkTemplateArc } from './project/public/arc/arc.component';
import { WorkTemplateTrace } from './project/public/trace/trace.component';
import { WorkTemplatePuppetto } from './project/public/puppetto/puppetto.component';
import { WorkTemplateShelltone } from './project/public/shelltone/shelltone.component';
import { WorkTemplateAvpixel } from './project/public/avpixel/avpixel.component';

/* Components */
import { LayoutDefaultComponent } from '../../shared/layout-default/layout-default.component';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent,
    children: [
      { path: 'work', component: WorkContainer },

      // projects - public
      { path: 'work/magritte', component: WorkTemplateMagritte },
      { path: 'work/ubiquitel', component: WorkTemplateUbiquitel },
      { path: 'work/roygbiv', component: WorkTemplateRoygbiv },
      { path: 'work/protophone', component: WorkTemplateProtophone },
      { path: 'work/dropnotes', component: WorkTemplateDropnotes },
      { path: 'work/arc', component: WorkTemplateArc },
      { path: 'work/trace', component: WorkTemplateTrace },
      { path: 'work/puppetto', component: WorkTemplatePuppetto },
      { path: 'work/shelltone', component: WorkTemplateShelltone },
      { path: 'work/avpixel', component: WorkTemplateAvpixel }
    ]
  },
  { path: '**', redirectTo: 'work' }
];

const components = [
  WorkContainer,

  // projects - public
  WorkTemplateMagritte,
  WorkTemplateUbiquitel,
  WorkTemplateRoygbiv,
  WorkTemplateProtophone,
  WorkTemplateDropnotes,
  WorkTemplateArc,
  WorkTemplateTrace,
  WorkTemplatePuppetto,
  WorkTemplateShelltone,
  WorkTemplateAvpixel
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
