import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {HttpClientModule} from "@angular/common/http";
import {SkillModule} from "./skill/skill.module";
import {ProjectModule} from "./project/project.module";
import {Angulartics2Module} from "angulartics2";
import {Angulartics2GoogleGlobalSiteTag} from "angulartics2/gst";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";

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
    Angulartics2Module.forRoot(),

    HttpClientModule,
    FormsModule,

    FlexLayoutModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,

    SkillModule,
    ProjectModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private angulartics: Angulartics2GoogleGlobalSiteTag) {
    angulartics.startTracking();
  }
}
