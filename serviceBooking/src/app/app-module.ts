import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing module
import { AppRoutingModule } from './app-routing-module';

//  Root component
import { App } from './app';

//  Your components
import { Login } from './basic/components/login/login';
import { SignUp } from './basic/components/signup/signup';

//  Ng Zorro setup
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

//  Centralized Ng Zorro imports (you should create this file)
import {DemoNgZorroAntdModule} from './DemoNgZorroAntdModule'

registerLocaleData(en);

@NgModule({
  declarations: [
    App,
    Login,
    SignUp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoNgZorroAntdModule 
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [App]
})
export class AppModule {}
