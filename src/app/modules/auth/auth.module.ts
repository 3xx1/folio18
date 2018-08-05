import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Modules */
import { SharedModule } from '../../shared/shared.module';

/* Services */
import { AuthGuard } from '../../services/auth.guard';

/* Container */
import { AuthContainer } from './container/auth.component';

/* Components */
import { LayoutDefaultComponent } from '../../shared/layout-default/layout-default.component';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent,
    children: [
      { path: 'auth', component: AuthContainer }
    ]
  }
];

const components = [
  AuthContainer
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
  declarations: components,
  exports: components
})

export class AuthModule {}
