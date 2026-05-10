import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { task } from '../task/usertasks.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-addtask',
  imports: [FormsModule, RouterLink],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css',
})
export class Addtask {
title:string=''
summary:string=''
duedate:string=''
@Output() cancel=new EventEmitter()
@Output() add=new EventEmitter<{title:string,summary:string,duedate:string}>()
onclickcancel(){
  this.cancel.emit()
}
onadd(){
  this.add.emit( {
      title:this.title
      ,summary:this.summary
      ,
      duedate:this.duedate
    })
}
}
