import {Component} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, pluck, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(private readonly books: BookService,
              router: Router,
              route: ActivatedRoute) {
    this.book$ = route.params
      .pipe( // {id: '2', abc: 'cosTam'}
        pluck('id'),
        onlyCorrectIds(),
        parseId(),
        switchMap(id => this.books.getOne(id))
      );
  }

  save(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const authorElement = formElement.querySelector<HTMLInputElement>('#author');
    const titleElement = formElement.querySelector<HTMLInputElement>('#title');

    // this.books.updateBook({
    //   id: this.book.id,
    //   author: authorElement.value,
    //   title: titleElement.value
    // });
  }
}

function onlyCorrectIds() {
  return filter(idAsString => {
    const id = +idAsString;
    return !isNaN(id);
  });
}

function parseId() {
  return map(idAsString => +idAsString);
}
