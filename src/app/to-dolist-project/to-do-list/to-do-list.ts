import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { Form } from "../form/form";
import { Router } from '@angular/router';
import { newTask } from '../form/form.model';
import { Task } from "../task/task";
import { Header } from "../header/header";
import { Addnewtask } from "../addnewtask/addnewtask";
import { todolistService } from '../todolist.service';

@Component({
  selector: 'app-to-do-list',
  imports: [Form, Task, Header, Addnewtask],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit{

  todolistservice=inject(todolistService)
  tasks:newTask[]=[]
  addtask!:newTask 
  visible:boolean=false
  Flag!:boolean
  alltasks!:newTask[]
add(){
  this.visible=!this.visible
}
addheadernewtask(){
  this.visible=true
}
ngOnInit(): void {
let savedtask=localStorage.getItem('task')
if(savedtask){
  this.tasks=JSON.parse(savedtask)
}
this.alltasks=[...this.tasks]

}

newtask(task:newTask){
  this.visible=false
  this.tasks.unshift({
    id:new Date().getTime().toString(),
    taskname: task.taskname,
    describion: task?.describion,
    assignees: task?.assignees,
    date: task?.date,
    pririty: task?.pririty,
    taskstats: 'In Progress',
    flag: false
  })
  this.alltasks=[...this.tasks]
  this.todolistservice.savetask(this.alltasks)
 
}
onsearch(value:string){

const filterdtask=this.tasks.filter((v)=>{return v.taskname?.toLocaleLowerCase().includes(value.toLocaleLowerCase())})
this.alltasks=[...filterdtask]
}
canceltask(){
  this.visible=false
}
test!:string
import(e:newTask) {  
  
  if(e){   
     this.tasks.unshift({
    id:e.id,
    taskname: e.taskname,
    describion: e?.describion,
    assignees: e?.assignees,
    date: e?.date,
    pririty: e?.pririty,
    taskstats: e.taskstats,
    flag: e.flag
  })
  this.alltasks=[...this.tasks]
  this.todolistservice.savetask(this.alltasks)
  
  }

}
}
