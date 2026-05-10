import { Component, DestroyRef, EventEmitter, inject, input, Input, OnInit, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { newTask } from '../form/form.model';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{
tasks=input.required<newTask[]>()
addTask=output()
searchvalue=output<string>()
visible=input.required<boolean>()
destroyref=inject(DestroyRef)
searchsub=new Subject<string>()
search:string=''


addtask(){
  this.addTask.emit()
}
ngOnInit(): void {
  const subscribtion=this.searchsub.pipe(
    debounceTime(300),
    distinctUntilChanged()
  ).subscribe(v=>{
    this.sendevalue(v)
    

  })
  this.destroyref.onDestroy(()=> subscribtion.unsubscribe())
}
sendevalue(value:string){
this.searchvalue.emit(value)
}
onsearch(valur:string){
this.searchsub.next(valur)
}
}
