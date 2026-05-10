import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Users } from "../users/users";
import { dummy_users } from '../dummy-users';
import { Tasks } from "../tasks/tasks";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-flim-task',
  imports: [Header, Users, ],
  templateUrl: './flim-task.html',
  styleUrl: './flim-task.css',
})
export class FlimTask {
users=dummy_users
  selecteduser!:string
  get selectusers(){
    return this.users.find(u=>u.id===this.selecteduser)!
  }
clickonuser(id:string){
this.selecteduser=id
   
} 
}
