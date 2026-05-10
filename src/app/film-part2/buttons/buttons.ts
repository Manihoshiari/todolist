import { Component, ContentChild, contentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[buttoncomp], app-but',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
  encapsulation:ViewEncapsulation.None,
  host:{
   
  }
})
export class Buttons {
@HostBinding('class') classname='bg-red-400'
@ContentChild('input') input?:ElementRef<HTMLSpanElement>
@HostListener('click') log(){
  console.log(this.input);
  
} 
}
