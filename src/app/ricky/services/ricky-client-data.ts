import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';
import {
  characterAdapter,
  charactersResponseAdapter,
} from '../adapters/character.adapter';
import { Character, Info } from '../models/character.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickyClientData {
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  private http = inject(HttpClient);
  private info = signal<Info | null>(null);

  page = signal(1);

  getPage() {
    return this.page;
  }

  subtractPage() {
    if (this.info()?.prev === null) return;
    this.page.set(this.page() - 1);
  }

  addPage() {
    if (this.info()?.next === null) return;
    this.page.set(this.page() + 1);
  }

  getCharacters() {
    return httpResource(() => `${this.baseUrl}?page=${this.page()}`, {
      parse: (response: any) => {
        const responseData = charactersResponseAdapter(response);
        this.info.set(responseData.info);
        return responseData;
      },
    });
  }


  getCharacterById(id: number) {
    console.log(`${this.baseUrl}/${id}`);
    return this.http.get<Character>(`${this.baseUrl}/${id}`).pipe(
      map((character: Character) => {
        return characterAdapter(character);
      })
    );
  }
}
