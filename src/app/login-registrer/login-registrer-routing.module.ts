import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

import { LoginRegistrerPage } from './login-registrer.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRegistrerPage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRegistrerPageRoutingModule {}
