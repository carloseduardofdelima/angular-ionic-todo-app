import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  allItems = [
    { todoName: 'Desafio de design UI/UX', todoDesc: 'descrição descrição descrição', 'checked': false },
    { todoName: 'Entrevista com a empresa', todoDesc: 'descrição descrição descrição', 'checked': false },
    { todoName: 'contratação', todoDesc: 'descrição descrição descrição', 'checked': false },
    { todoName: 'eat', todoDesc: 'bla', 'checked': true }
  ];


  constructor() {}

}
