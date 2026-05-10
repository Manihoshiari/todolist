import { Component, ContentChild, contentChild, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { foodname } from './foodname.model';

@Component({
  selector: 'app-first-tab',
  imports: [ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './first-tab.html',
  styleUrl: './first-tab.css',
})
export class FirstTab {
  @Output() foodname =new EventEmitter<foodname>()
  @Output() clearfoods= new EventEmitter()
  @Output() delete= new EventEmitter()
  @ViewChild('form') form?:NgForm
name:string=''
amount!:number

addfoodname(){
 
  console.log('form:',this.form);
  

  this.foodname.emit({
    name: this.form?.form.value.name,
    amount: this.form?.form.value.amount
    

  })
   this.form?.form.reset()
}
clear(){
this.clearfoods.emit()

}
deletefood(){
  this.delete.emit()
}
}
