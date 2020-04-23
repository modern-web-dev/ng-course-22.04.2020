import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input()
  book: Book;
  @Output()
  bookChange = new EventEmitter<Book>();

  notifyOnBookChange(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const authorElement = formElement.querySelector<HTMLInputElement>('#author');
    const titleElement = formElement.querySelector<HTMLInputElement>('#title');

    this.bookChange.emit({
      id: this.book.id,
      author: authorElement.value,
      title: titleElement.value
    });
  }
}
