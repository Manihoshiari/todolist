import { inject, Injectable, signal } from '@angular/core';
import { newTask } from './form/form.model';
import { names } from './assignees';


@Injectable({ providedIn: 'root' })
export class todolistService {
    Tasks: newTask[] = []
    Id!: string
    savetask(task: newTask[]) {
        localStorage.setItem('task', JSON.stringify(task))
    }
    get Assignees() {
        return names
    }
    addflag(flag: boolean, id: string) {
        this.Tasks = this.Tasks.map(v => v.id == id ? {...v, flag } : v)
        this.savetask(this.Tasks)
    }
    loadTasks() {
        const data = localStorage.getItem('task');
        this.Tasks = data ? JSON.parse(data) : [];
    }
    addstatus(taskstats: string, id: string) {
        this.Tasks = this.Tasks.map(v => v.id === id ? { ...v, taskstats } : v)
        this.savetask(this.Tasks)
    }
    
    deletetask(id:string){
const filteredtask=this.Tasks.filter(v=>v.id!==id)
this.savetask(filteredtask)
    }
}