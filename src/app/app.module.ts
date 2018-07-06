import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OscompComponent } from './oscomp/oscomp.component';
import { ProgcompComponent } from './progcomp/progcomp.component';
import { DbcompComponent } from './dbcomp/dbcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    OscompComponent,
    ProgcompComponent,
    DbcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
