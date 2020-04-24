import {Component, HostBinding, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent {
  @Input()
  set ofFormControl(newFormControl: AbstractControl) {
    this.error$ = newFormControl.statusChanges
      .pipe(
        filter(status => status === 'INVALID' || status === 'VALID'),
        map(status => {
          if (status === 'INVALID') {
            const errorCode = Object.keys(newFormControl.errors)[0];
            let errorMsg: string;
            switch (errorCode) {
              case 'required': {
                errorMsg = 'Please provide a value';
                break;
              }
              default:
                errorMsg = 'Unknown error';
            }
            return errorMsg;
          }
          return '';
        })
      );
  }

  @HostBinding('class')
  invalidFeedback = 'invalid-feedback';

  error$: Observable<string>;
}
