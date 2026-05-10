import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, inject, output, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule, Validators,  } from '@angular/forms';
import { assignees, newTask } from './form.model';
import { todolistService } from '../todolist.service';



@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',

})
export class Form {
  newtask=output<newTask>()
  CancelTask=output()
  @ViewChild('outassign') outassign!: ElementRef<HTMLDivElement>
  submitted: boolean = false
  reform!: FormGroup
  fb = inject(FormBuilder)
  @HostListener('document:click', ['$event']) out(e: MouseEvent) {
    if (this.outassign) {
      if (!this.outassign.nativeElement.contains(e.target as HTMLElement)) {
        this.assigneespage = false
      }
    }

  }
  select = ''
  todolistservice = inject(todolistService)
  assigneespage: boolean = false
  names = this.todolistservice.Assignees
  constructor() {
    this.reform = this.fb.group({
      taskname: ['', [Validators.required, Validators.minLength(4)]],
      desc: ['', [Validators.required, Validators.minLength(4)]],
      assignee: ['', [Validators.required]],
      date: ['', [Validators.required]],
      pr: ['', [Validators.required]]

    })
  }
  get validatetaskname() {
    return this.reform.get('taskname')
  }
  get validatedesc() {
    return this.reform.get('desc')
  }
  get validateassignee() {
    return this.reform.get('assignee')
  }
  get validatedate() {
    return this.reform.get('date')
  }
  get validatepr() {
    return this.reform.get('pr')
  }
  createtask() {
    if (this.reform.valid) {
      this.newtask.emit({
        id: '',
        taskname: this.reform.value.taskname,
        describion: this.reform.value.desc,
        assignees: this.select,
        date: this.reform.value.date,
        pririty: this.reform.value.pr,
        taskstats: '',
        flag: false,

      })

    }
    this.submitted = true

  }
  canceltask() {
    this.CancelTask.emit()
    this.submitted = false
  }
  openassignees() {
    this.assigneespage = !this.assigneespage
  }
  closeassign(e: Event) {
    e.stopPropagation()
    this.select = this.reform.value.assignee
    this.assigneespage = false

  }
}
