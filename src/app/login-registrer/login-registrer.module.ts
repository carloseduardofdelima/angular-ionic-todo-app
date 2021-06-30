import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRegistrerPageRoutingModule } from './login-registrer-routing.module';

import { LoginRegistrerPage } from './login-registrer.page';
import { SharedComponentsModule } from '../components/shared-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRegistrerPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [LoginRegistrerPage]
})
export class LoginRegistrerPageModule {}
