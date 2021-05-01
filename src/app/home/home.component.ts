import { Component } from '@angular/core';
import type { Character } from '../models/character.model';
import { environment } from '../environment/environment'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-home',
  template: `<h1>Universal Tekken Tier List</h1>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Tier</th>
      <th>N&deg; of Votes</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let character of characters">
      <td>{{character.name}}</td>
      <td>{{character.vote}}</td>
      <td>{{character.voteCount}}</td>
    </tr>
  </tbody>
</table>`,
styleUrls:['./home.component.css']
})
export class HomeComponent  {
  public static readonly SERVICES_ROOT = `${environment.apiUrl}/`;
  characters: Character[]
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe( (data) => {
      console.log(data)
      this.characters = data.characters
      })
  }
}
