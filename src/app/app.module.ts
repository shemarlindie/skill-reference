import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {HttpClientModule} from "@angular/common/http";
import {SkillService} from "./skill/skill.service";
import {SkillModule} from "./skill/skill.module";
import {GLOBAL_MODULES} from "./global-modules";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,

    GLOBAL_MODULES,

    SkillModule,
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
