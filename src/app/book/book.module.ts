import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailsComponent} from './book-details/book-details.component';

@NgModule({
  declarations: [BookDetailsComponent],
  exports: [
    BookDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule {
}
