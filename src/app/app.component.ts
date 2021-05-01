import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import type { Character } from './models/character.model';
import { environment } from './environment/environment'
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public static readonly SERVICES_ROOT = `${environment.apiUrl}/`;
  result$: Observable<Character[]>
  constructor(private http: HttpClient) {
    this.result$ = forkJoin(
      [
        this.http.get<Character[]>(`${AppComponent.SERVICES_ROOT}characters1`),
        this.http.get<Character[]>(`${AppComponent.SERVICES_ROOT}characters2`)
      ]
    ).pipe(
        map(([characters1, characters2]) => ([...characters1, ...characters2]))
      )
  }
}
