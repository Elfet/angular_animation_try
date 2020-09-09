import { trigger, state, style, animate, transition } from '@angular/animations';

export function Transform() {
    return trigger('transform', [
        state('open', style({
          backgroundColor: 'yellow',
          transform: `translateX({{min_width}}px)`
        }), {params: {min_width: 1}}),
        state('closed', style({
          backgroundColor: 'green',
          transform: `translateX(0)`
        })),
        transition('open => closed', [
          animate('1s')
        ]),
        transition('closed => open', [
          animate('0.5s')
        ]),
      ])
}