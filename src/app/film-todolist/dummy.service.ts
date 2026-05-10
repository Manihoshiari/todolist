import { inject, Injectable } from '@angular/core';
import { dummy_users } from './dummy-users';

@Injectable({providedIn: 'root'})
export class dummyusersService {
    constructor() { }
 
   get dummyusers(){
return dummy_users
    }
    
}