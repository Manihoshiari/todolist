import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./film-todolist/header/header";
import { dummy_users } from './film-todolist/dummy-users';
import { Users } from "./film-todolist/users/users";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
users=dummy_users
  selecteduser!:string
  get selectusers(){
    return this.users.find(u=>u.id===this.selecteduser)!
  }
clickonuser(id:string){
this.selecteduser=id
   
} 
}
