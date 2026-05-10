import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { email, form, minLength } from '@angular/forms/signals';
// function qustion(c:AbstractControl){
//   if(c.value.include('?')){
//     return null
//   }
//  return{
//     question:true
//   }
// }
@Component({
  selector: 'app-reactiveform',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {
  

  form =new FormGroup({
  email:new FormControl('',[Validators.email,Validators.required]),
  password: new FormControl('',[Validators.minLength(5)])
  
})



  

get validateemail(){
  return this.form.controls.email.touched && this.form.controls.email.invalid && this.form.controls.email.dirty
}
get validatepass(){
  return this.form.controls.password.touched &&this.form.controls.password.invalid && this.form.controls.password.dirty
}
submit(){
  
  console.log(this.form.controls.email.value,this.form.controls.password.value);
  
}
reset(){
  this.form.reset()
}
}
