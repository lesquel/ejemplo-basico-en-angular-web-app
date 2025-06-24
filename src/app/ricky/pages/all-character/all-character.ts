import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Pagination } from "../../components/pagination/pagination";
import { ListChacharacter } from "../../components/list-chacharacter/list-chacharacter";

@Component({
  selector: 'app-all-character',
  imports: [Pagination, ListChacharacter],
  templateUrl: './all-character.html',
  styles: [
    `
      @keyframes shimmer {
        0% {
          transform: translateX(-100%) skewX(-12deg);
        }

        100% {
          transform: translateX(200%) skewX(-12deg);
        }
      }

      .animate-shimmer {
        animation: shimmer 1.5s ease-in-out infinite;
      }

      /* Efectos adicionales para mejorar la experiencia */
      .group:hover .app-character-card {
        transform: scale(1.02);
      }

      /* Gradiente animado para el header */
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }

      header {
        background-size: 400% 400%;
        animation: gradient 8s ease infinite;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllCharacter {

}
