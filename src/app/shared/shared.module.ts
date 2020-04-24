import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [CommonModule, HeaderComponent, RouterModule, ReactiveFormsModule]
})
export class SharedModule { }
