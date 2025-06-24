import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Character } from '../../models/character.model';
import { RickyClientData } from '../../services/ricky-client-data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-chacharacter',
  imports: [CommonModule],
  templateUrl: './single-chacharacter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleChacharacter implements OnInit {
  private rickyClientData = inject(RickyClientData);
  private router = inject(Router);
  characterId = input<number>();
  character = signal<Character | null>(null);

  statusClass = computed(() => {
    const status = this.character()?.status;
    return {
      'bg-green-500': status === 'Alive',
      'bg-red-500': status === 'Dead',
      'bg-gray-500': status === 'unknown',
    };
  });

  goBack(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.rickyClientData
      .getCharacterById(this.characterId() as number)
      .subscribe((character: Character) => {
        this.character.set(character);
      });
  }
}
