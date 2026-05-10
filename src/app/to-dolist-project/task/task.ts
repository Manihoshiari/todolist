import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, inject, input, Input, OnInit, Output, ViewChild } from '@angular/core';
import { assignees, newTask } from '../form/form.model';
import { DatePipe } from '@angular/common';
import { required } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { todolistService } from '../todolist.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe,FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task implements OnInit{
selectedimg?:assignees
taskstatusisopen:boolean=false
@ViewChild('ulstats') ulstats!:ElementRef<HTMLFormElement>
taskService=inject(todolistService)
names=this.taskService.Assignees
newtask=input.required<newTask>()

  @HostListener("document:click",['$event'])outstatsclick(e:MouseEvent){
  if(this.ulstats){
    if(!this.ulstats.nativeElement.contains(e.target as HTMLElement)){
  this.taskstatusisopen=false
}
  }

}


opentaskstatus() {
this.taskstatusisopen=true

}
ngOnInit(): void {
this.selectedimg= this.names.find(v=>v.name==this.newtask().assignees)
this.taskService.loadTasks()
}
show(e:Event){
  
 this.newtask().taskstats= (e.target as HTMLInputElement).value 
 if(this.newtask().taskstats==='Canceled'){
   setTimeout(() => {
     this.taskService.deletetask(this.newtask().id)
     
     
   }, 200);
   
  }

  this.taskstatusisopen=false
  this.taskService.addstatus(this.newtask().taskstats,this.newtask().id)
   

}
flagchange(){
this.newtask().flag=!this.newtask().flag
this.taskService.addflag(this.newtask().flag,this.newtask().id)

}

}
