import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [CommonModule],
  templateUrl: './character-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCard {
  character = input.required<Character>();
}
