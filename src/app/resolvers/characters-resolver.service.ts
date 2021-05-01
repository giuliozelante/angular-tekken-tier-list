import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Resolve } from '@angular/router';
import type { Character } from '../models/character.model';
import type { TekkenTierListService } from '../services/tekken-tier-list.service';

@Injectable()
export class CharactersResolver implements Resolve<Character[]> {
  constructor(private ttls: TekkenTierListService) {}

  resolve(): Observable<Character[]> {
    return this.ttls.getCharacters();
  }
}
