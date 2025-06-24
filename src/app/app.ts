import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [
    `
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
      }

      ::view-transition-old(root) {
        animation-name: fade-zoom-out;
      }

      ::view-transition-new(root) {
        animation-name: fade-zoom-in;
      }

      @keyframes fade-zoom-in {
        from {
          opacity: 0;
          transform: scale(0.98);
          filter: blur(4px);
        }
        to {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
        }
      }

      @keyframes fade-zoom-out {
        from {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
        }
        to {
          opacity: 0;
          transform: scale(1.02);
          filter: blur(4px);
        }
      }
    `,
  ],
})
export class App {}
