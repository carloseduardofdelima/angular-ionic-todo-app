import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideDrawerComponent } from '../slide-drawer/slide-drawer.component';
import { IonicModule } from '@ionic/angular';
import { TodoComponent } from '../todo/todo.component';
import { CalendarComponent, CalendarModule } from 'ion2-calendar';
import { Tab3Page } from '../tab3/tab3.page';



@NgModule({
  declarations: [SlideDrawerComponent, TodoComponent],
  imports: [
    CommonModule,
    IonicModule,
    CalendarModule
  ],
  exports: [
    SlideDrawerComponent,
    TodoComponent,
    CalendarComponent
  ]
})
export class SharedComponentsModule { }
