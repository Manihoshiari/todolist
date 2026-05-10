import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit{
search:string=''
searchsubject=new Subject<string>()
test:string[]=['banana','bomb','pineapple','pipe','pipi',
  'abbas'
,'ali']
newtest:string[]=[...this.test]

ngOnInit(): void {

  this.searchsubject.pipe(debounceTime(200),distinctUntilChanged()).subscribe(v=>{
this.filteru(v)
    
    },  )
}



onsearch(value:string){
 this.searchsubject.next(value)
}
filteru(v:string){
  let newuers=this.test.filter((u)=>{return u.toLocaleLowerCase().includes(v.toLocaleLowerCase())}) 
  this.newtest=[...newuers]
}
}
