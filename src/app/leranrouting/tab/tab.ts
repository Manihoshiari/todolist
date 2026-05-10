import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { FirstTab } from "../first-tab/first-tab";
import { SecondTab } from "../second-tab/second-tab";
import { foodname } from '../first-tab/foodname.model';
import { NamePipe } from "./tab.pipe";
import { DecimalPipe } from '@angular/common';
import { NameDirective } from "./tab.directive";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-tab',
  imports: [FirstTab, SecondTab, NamePipe, DecimalPipe, NameDirective, RouterLink],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab implements OnInit{
  order=signal<'asc'|'dsc'>('dsc')
  santi:any='100'
  number:number=13243.123456543
  ahval=input.required<string>()

  names: foodname[]=[ ]
  adad:number[]=[12,325,2,4,23,54]
  activateroute=inject(ActivatedRoute)
  destroyref=inject(DestroyRef)
  ngOnInit(): void {
    console.log('salalm:',this.ahval());
    
    let sub=this.activateroute.queryParams.subscribe({
      next:(p) =>(this.order.set(p['role']))
    })
    this.destroyref.onDestroy(()=>sub.unsubscribe())
  }
  addfood(Foodname:foodname){
   
    
this.names.unshift({
  name: Foodname.name,
  amount: Foodname.amount,
  
})
 this.savefood()
  }
  Clearfood(){

    this.names=[]
        this.savefood()
        localStorage.clear()
  }
  constructor(){
    let savedfood=localStorage.getItem('food')
    if(savedfood){
      this.names=JSON.parse(savedfood)
    }
  }
  deletefood(){
   
    this.names.shift()

     this.savefood()
  }
  savefood(){
    localStorage.setItem('food',JSON.stringify(this.names))
  }
}
