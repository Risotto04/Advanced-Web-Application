import { Component } from '@angular/core';
import { HlmFormFieldModule } from '@shared/components/ui-formfield-helm/src';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  // imports: [HlmFormFieldModule],
})
export class FooterComponent {}
