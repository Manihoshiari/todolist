import { Component, ElementRef, inject, NgZone, ViewChild, viewChild } from '@angular/core';
import { Buttons } from "../buttons/buttons";
import { Rec } from "../generate/rec/rec";
import { FormsModule } from '@angular/forms';
import { testService } from './test.service';
import { Tempform } from "../tempform/tempform";
import { Reactiveform } from "../reactiveform/reactiveform";

@Component({
  selector: 'app-area',
  imports: [Buttons, Rec, FormsModule,  Reactiveform],
  templateUrl: './area.html',
  styleUrl: './area.css',
})
export class Area {
  private zone=inject(NgZone)
Consoletest=inject(testService)
constructor(){
  this.Consoletest.consoletest( )
  this.zone.runOutsideAngular(()=>{
    setTimeout(()=>{
      console.log('zone pullition');
      
    }
    ,2000)
  })
}
   @ViewChild('form') form?:ElementRef<HTMLFormElement>
  rectangle= { height:   '300' ,width: '300'  };
  // private form=viewChild.required<ElementRef<HTMLFormElement>>('form')
  
formclick(){
  
this.form?.nativeElement.reset()
console.log(this.form);


}
changesize($event: { width: string; height: string; }) {
this.rectangle.height=$event.height
this.rectangle.width=$event.width
}

}
