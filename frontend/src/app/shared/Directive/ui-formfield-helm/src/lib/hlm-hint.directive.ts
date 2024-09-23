import { Directive } from '@angular/core';

@Directive({
  selector: 'hlm-hint',
  standalone: false,
  host: {
    class: 'block text-sm text-muted-foreground',
  },
})
export class HlmHintDirective {}
