import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BfrHeaderComponent } from './bfr-header/bfr-header.component';
import { BfrFooterComponent } from './bfr-footer/bfr-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BfrHeaderComponent,
    BfrFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
