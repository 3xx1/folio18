import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Global Modules */
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

/* Page Modules */
import { AboutModule } from './modules/about/about.module';
import { WorkModule } from './modules/work/work.module';

/* Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { enableTracing: false }),
    SharedModule,
    AboutModule,
    WorkModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
