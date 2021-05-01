import { Component } from '@angular/core';
import type { Character } from './models/character.model';
import { environment } from './environment/environment'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public static readonly SERVICES_ROOT = `${environment.apiUrl}/`;
  characters: Character[]
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.characters = data.characters)
  }
}
