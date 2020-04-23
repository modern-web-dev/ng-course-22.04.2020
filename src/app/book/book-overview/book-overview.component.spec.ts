import {BookOverviewComponent} from './book-overview.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

fdescribe('BookOverviewComponent', () => {
  describe('(class)', () => {
    let component: BookOverviewComponent;

    beforeEach(() => {
      component = new BookOverviewComponent();
    });

    it('initializes the selected book with null', () => {
      // then
      expect(component.selectedBook).toBeNull();
    });

    it('selects a book', () => {
      // given
      const book = component.books[0];
      // when
      component.selectBook(book);
      // then
      expect(component.selectedBook).toBe(book);
    });
  });

  describe('(DOM)', () => {
    let fixture: ComponentFixture<BookOverviewComponent>;
    let component: BookOverviewComponent;
    let element: HTMLElement;

    beforeEach(() => {
      return TestBed.configureTestingModule({
        declarations: [BookOverviewComponent]
      }).compileComponents()
        .then(() => {
          fixture = TestBed.createComponent<BookOverviewComponent>(BookOverviewComponent);
          component = fixture.componentInstance;
          element = fixture.nativeElement;
        });
    });

    it('creates a component instance', () => {
      expect(component).toBeTruthy();
    });

    it('renders a table', () => {
      const tableElement = element.querySelector('table');
      expect(tableElement).toBeTruthy();
    });

    it('renders rows containing books', () => {
      fixture.detectChanges();
      const rowElements = element.querySelectorAll<HTMLTableRowElement>('table tbody tr');
      expect(rowElements.length).toBe(2);
      const firstRowElement = rowElements[0];
      const cellElements = firstRowElement.querySelectorAll<HTMLTableCellElement>('td');
      const authorCellElement = cellElements[0];
      const titleCellElement = cellElements[1];
      expect(authorCellElement.textContent).toBe('Joe');
    });
  });
});
