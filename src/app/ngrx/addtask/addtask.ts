import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addtask } from '../task.action';

@Component({
  selector: 'app-addtask',
  imports: [FormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css',
})
export class Addtask {
  select=inject(Store)
task:string=''
add(){
this.select.dispatch(addtask({task:this.task}))
}
}
