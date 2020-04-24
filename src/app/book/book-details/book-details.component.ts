import {Component, OnDestroy} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, pluck, takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnDestroy {
  bookForm: FormGroup;
  currentBookId: number;
  private unsubscribe$ = new Subject();

  constructor(private readonly books: BookService,
              private readonly router: Router,
              route: ActivatedRoute) {
    this.bookForm = new FormGroup({
      author: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(10),
          // contains('Marek')
        ]),
      title: new FormControl('', Validators.required)
    });

    route.data.pipe(
      takeUntil(this.unsubscribe$),
      pluck('book'),
      filter(book => book),
      tap(book => this.currentBookId = book.id)
    ).subscribe(book => this.bookForm.patchValue(book));
  }

  save() {
    if (this.bookForm.valid) {
      const book = this.bookForm.value;
      this.books.saveOrUpdateBook({
        ...book, id: this.currentBookId
      });

      this.router.navigate(['/books']);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getErrorMsgs(author: string) {
    const authorFormElement = this.bookForm.get(author);
    const empty = authorFormElement.getError('required');
    const maxLength = authorFormElement.getError('maxlength');
    const notMarek = authorFormElement.getError('notMarek');
    return empty ? 'Please provide a value' :
      (maxLength ? `The value is too long
      (max length: ${maxLength.requiredLength}, currently: ${maxLength.actualLength})` : 'Please provide value containing Marek');
  }
}


function contains(what: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (!isEmptyInputValue(value) && value.indexOf(what) === -1) {
      return {contains: true};
    }
    return null;
  };
}

function isEmptyInputValue(value) {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}
