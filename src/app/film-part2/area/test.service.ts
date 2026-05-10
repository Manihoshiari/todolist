import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class testService {
    private test='test'
   readonly newtest=this.test
name=new BehaviorSubject<string>('')
    consoletest(){
        console.log(this.test);
        
    }
    changename(){
        this.name.next('mani')
    }





    constructor() { }
    
}