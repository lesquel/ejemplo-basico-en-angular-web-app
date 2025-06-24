import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';
import { charactersResponseAdapter } from '../adapters/character.adapter';
import { Info } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class RickyClientData {
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  private http = inject(HttpClient);
  private info = signal<Info | null>(null);

  page = signal(1);

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
}
