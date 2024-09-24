import { Directive } from '@angular/core';

@Directive({
  standalone: false,
  selector: 'hlm-error',
  host: {
    class: 'block text-destructive text-sm font-medium',
  },
})
export class HlmErrorDirective {}
