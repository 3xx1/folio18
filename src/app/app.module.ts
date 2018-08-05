import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

/* Global Modules */
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

/* Global Services */
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';

/* Page Modules */
import { AboutModule } from './modules/about/about.module';
import { AuthModule } from './modules/auth/auth.module';
import { WorkModule } from './modules/work/work.module';

/* Components */
import { AppComponent } from './app.component';

/* Util Functions Exports */
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { enableTracing: false }),
    SharedModule,
    AboutModule,
    AuthModule,
    WorkModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,

        // TODO - swap with environment file vals
        whitelistedDomains: ['localhost:4201'],
        blacklistedRoutes: ['localhost:4201/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
