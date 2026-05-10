import { Component, computed, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterOutlet, RouterState, RouterStateSnapshot } from '@angular/router';
import { dummyusersService } from '../dummy.service';

@Component({
  selector: 'app-usertask',
  imports: [RouterOutlet],
  templateUrl: './usertask.html',
  styleUrl: './usertask.css',
})
export class Usertask implements OnInit {
activatedroute=inject(ActivatedRoute)
  Dummyusers=inject(dummyusersService)
  userid=input.required<string>()
usernam=computed(()=>this.Dummyusers.dummyusers.find(v=>v.id=this.userid())?.name)
ngOnInit(): void {
  this.activatedroute.data.subscribe({
    next:(v=>{
      console.log(v);
      
    })
  })
}
}
// export const resolveusername:ResolveFn<string>=(activatedroute:ActivatedRouteSnapshot
//   ,state:RouterStateSnapshot)=>{
//     let Dummyusers=inject(dummyusersService)
//     let findname=Dummyusers.dummyusers.find(v=>v.id==activatedroute.paramMap.get('userid'))?.name
//   return findname

// }
