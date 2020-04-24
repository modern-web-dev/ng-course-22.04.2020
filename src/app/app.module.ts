import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {bookRoutes} from './book/book.routes';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/books', pathMatch: 'full'},
      ...bookRoutes
    ]),
    BookModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
