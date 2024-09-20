import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from './components/ui-button-helm/src/lib/hlm-button.directive';

import { HlmErrorDirective } from './components/ui-formfield-helm/src/lib/hlm-error.directive';
import { HlmFormFieldComponent } from './components/ui-formfield-helm/src/lib/hlm-form-field.component';
import { HlmHintDirective } from './components/ui-formfield-helm/src/lib/hlm-hint.directive';
import { HlmInputDirective } from './components/ui-input-helm/src/lib/hlm-input.directive';
import { HlmInputErrorDirective } from './components/ui-input-helm/src/lib/hlm-input-error.directive';

export * from './components/ui-button-helm/src/lib/hlm-button.directive';
export * from './components/ui-formfield-helm/src/lib/hlm-form-field.component';
export * from './components/ui-formfield-helm/src/lib/hlm-error.directive';
export * from './components/ui-formfield-helm/src/lib/hlm-hint.directive';
export * from './components/ui-input-helm/src/lib/hlm-input-error.directive';
export * from './components/ui-input-helm/src/lib/hlm-input.directive';

@NgModule({
  declarations: [
    HlmButtonDirective,
    HlmErrorDirective,
    HlmFormFieldComponent,
    HlmHintDirective,
    HlmInputDirective,
    HlmInputErrorDirective,
  ],
  imports: [CommonModule],
  exports: [
    HlmButtonDirective,
    HlmErrorDirective,
    HlmFormFieldComponent,
    HlmHintDirective,
    HlmInputDirective,
    HlmInputErrorDirective,
  ],
})
export class SharedModule {}
