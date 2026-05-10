import { Component, Input } from '@angular/core';
import { foodname } from '../first-tab/foodname.model';

@Component({
  selector: 'app-second-tab',
  imports: [],
  templateUrl: './second-tab.html',
  styleUrl: './second-tab.css',
})
export class SecondTab {
@Input({required:true}) recipe!: foodname
}
