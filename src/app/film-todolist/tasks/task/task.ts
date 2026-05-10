import { Component, computed, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { usertask } from './usertasks.model';
import { dummy_users } from '../../dummy-users';
import { dummyusersService } from '../../dummy.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
@Input({required:true}) task!:usertask
@Output() remove=new EventEmitter<string>()

removetask(){
  this.remove.emit(this.task.id)
}
}
