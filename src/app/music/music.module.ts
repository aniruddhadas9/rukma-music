import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import {CoreModule} from '@candifood/core';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [HomeComponent, StudentsComponent],
  exports: [HomeComponent, StudentsComponent]
})
export class MusicModule { }
