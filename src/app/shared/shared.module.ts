import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [HeaderComponent, ErrorMsgComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [CommonModule, HeaderComponent, RouterModule, ReactiveFormsModule, ErrorMsgComponent]
})
export class SharedModule { }
