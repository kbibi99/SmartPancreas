import { Component } from '@angular/core';

/**
 * Generated class for the MesureComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mesure',
  templateUrl: 'mesure.html'
})
export class MesureComponent {

  text: string;

  constructor() {
    console.log('Hello MesureComponent Component');
    this.text = 'Hello World';
  }

}
