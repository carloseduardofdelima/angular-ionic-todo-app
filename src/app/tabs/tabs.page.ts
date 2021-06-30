import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoPage } from '../new-todo/new-todo.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewTodoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
