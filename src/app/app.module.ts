import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRouterModule} from './app-router/app-router.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { MainComponent } from './main/main.component';

import {DatafeedsService} from './datafeeds.service';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [
    DatafeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
