import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemGridComponent} from './item-grid/item-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemGridComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
