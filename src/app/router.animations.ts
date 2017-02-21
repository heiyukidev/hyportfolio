import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return FadeInOut();
}

function FadeInOut() {
  return trigger('routerTransition', [
    state('void', style({})),
    state('*', style({})),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.5s ease-in-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('0.5s ease-in-out', style({ opacity: 0 }))
    ])
  ]);
}
