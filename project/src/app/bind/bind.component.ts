import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  template:`<p>Welcome to my website</p>
  <input type="text" [(ngModel)]='username'>
  <h2>{{username | uppercase}}</h2>` ,
  styleUrl: './bind.component.css'
})
export class BindComponent {
public username='';
}
