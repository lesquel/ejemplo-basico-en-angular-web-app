import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RickyClientData } from '../../services/ricky-client-data';
import { CharacterCard } from "../character-card/character-card";

@Component({
  selector: 'app-list-chacharacter',
  imports: [CharacterCard],
  templateUrl: './list-chacharacter.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListChacharacter {
  private rickyClientData = inject(RickyClientData);
  characters = this.rickyClientData.getCharacters();
}
