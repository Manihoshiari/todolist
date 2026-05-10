import { Component, input, Input } from '@angular/core';
import { Task } from './task/task';
import { Addtask } from './addtask/addtask';
import { filter, find } from 'rxjs';
import { task } from './task/usertasks.model';
import { dummyusersService } from '../dummy.service';
@Component({
  selector: 'app-tasks',
  imports: [Task,Addtask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
@Input({required:true}) name!:string
@Input({required:true}) userid!:string
newtask:boolean=false


tasks=[
  {
    id:'a1',
    userid:'1',
    title:'angular',
    summary:'fasdlkfj sdkjf sahsdfaoiehfsifsdfsddlfjfsdl',
    duedate:'2025'
  },{
    id:'a2',
    userid:'2',
    title:'angular',
    summary:'fasdlkfj sdkjf sahsdfaoiehfsifsdfsddlfjfsdl',
    duedate:'2025'
  },{
    id:'a3',
    userid:'3',
    title:'angular',
    summary:'fasdlkfj sdkjf sahsdfaoiehfsifsdfsddlfjfsdl',
    duedate:'2025'
  },{
    id:'a4',
    userid:'1',
    title:'angular',
    summary:'fasdlkfj sdkjf sahsdfaoiehfsifsdfsddlfjfsdl',
    duedate:'2025'
  }
]
get selectedtaskuser(){
  return this.tasks.filter((v=>v.userid==this.userid))
}

removetasks(taskid:string){
this.tasks=this.tasks.filter(v=>v.id!==taskid)
this.save()
}
addtask(){
this.newtask=true
}
cancelclick(){
  this.newtask=false
}
onadd(task:task){
this.tasks.unshift({
  id:new Date().getTime().toString(),
  userid:this.userid,
  title:task.title,
  
  summary:task.summary,
  duedate:task.duedate
  
 
})
 this.newtask=false
 this.save()
}
constructor(){
  let tasksaved=localStorage.getItem('task')
  if(tasksaved){
    this.tasks=JSON.parse(tasksaved)
  }
}
save(){
  localStorage.setItem('task',JSON.stringify(this.tasks))
}
}


