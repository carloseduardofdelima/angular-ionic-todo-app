import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.page.html',
  styleUrls: ['./new-todo.page.scss'],
})
export class NewTodoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      "dismissed": true,
    });
  }

}
