import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnInit {
  // @Output() newEntry = new EventEmitter<any>();

  // submitForm(data: any) {
  //   this.newEntry.emit(data);  // ส่งข้อมูลไปยัง Dashboard
  // }

   form = new FormGroup({
    name: new FormControl("",Validators.required),
    weight: new FormControl("", [Validators.required,Validators.min(1),Validators.max(3)]),
    exerciseDuration: new FormControl("", [Validators.required,Validators.min(1),Validators.max(60)]),
    mealType: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),

   })
  
  constructor(){
  }
  
  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.form.value);
  }
}
