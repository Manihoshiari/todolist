import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rec',
  imports: [],
  templateUrl: './rec.html',
  styleUrl: './rec.css',
})
export class Rec {
// size=model.required<{width:string,height:string}>()
// @Input({required:true}) size!:{width:string,height:string}
// @Output() sizeChange=new EventEmitter<{width:string,height:string}  >()
size=model.required<{width:string,height:string} >()
changesize(){
  this.size.set({
    height:'100',
    width:'400'
  })
}
}
