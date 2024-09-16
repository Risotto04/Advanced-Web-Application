import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  @Output() newEntry = new EventEmitter<any>();

  submitForm(data: any) {
    this.newEntry.emit(data);  // ส่งข้อมูลไปยัง Dashboard
  }

}
