import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { Character } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class TekkenTierListService {
  static readonly SERVICES_ROOT = environment.apiUrl + '/'
  static readonly CHARACTERS1_URL = TekkenTierListService.SERVICES_ROOT + 'characters1';
  static readonly CHARACTERS2_URL = TekkenTierListService.SERVICES_ROOT + 'characters2';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return forkJoin(
      [
        this.http.get<Character[]>(TekkenTierListService.CHARACTERS1_URL),
        this.http.get<Character[]>(TekkenTierListService.CHARACTERS2_URL)
      ]
    ).pipe(
        map(([characters1, characters2]) => ([...characters1, ...characters2]))
      )
  }
}
