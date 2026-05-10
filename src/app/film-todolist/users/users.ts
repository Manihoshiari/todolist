import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { dummy_users } from '../dummy-users';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
router=inject(Router)
@Input({required:true}) id!:string
@Input({required:true}) name!:string
@Input({required:true}) selected!:boolean
@Output() userclick=new EventEmitter();
useronclick(){
  console.log('id:',this.id);
  
this.userclick.emit(this.id)
// this.router.navigate(['tasks'+this.id])
}
}
