import { Routes } from '@angular/router';

import { Learn } from './learn/learn';
import { FlimTask } from './film-todolist/flim-task/flim-task';
import { Area } from './film-part2/area/area';
import { ToDoList } from './to-dolist-project/to-do-list/to-do-list';
import { Form } from './to-dolist-project/form/form';
import { Task } from './to-dolist-project/task/task';
import { SecondTab } from './leranrouting/second-tab/second-tab';
import { FirstTab } from './leranrouting/first-tab/first-tab';
import { Tab } from './leranrouting/tab/tab';
import { Tasks } from './film-todolist/tasks/tasks';
import { Notask } from './flim-todolist/notask/notask';

import { Notfound } from './notfound/notfound';
import { Search } from './search/search';
import { Addtask } from './film-todolist/tasks/addtask/addtask';
import { Usertask } from './film-todolist/usertask/usertask';
import { Calculator } from './calculator/calculator';

export const routes: Routes = [
    {
        path:'todolist',
        loadComponent:()=>import('../app/to-dolist-project/to-do-list/to-do-list').then(v=>v.ToDoList)
    },
   {
    path:'',
    component:ToDoList,

   },{
    path:'search',
    component:Search
   }
   ,{
    path:'notask',
    component:Notask
   },
    {
        path:'film',
        component:FlimTask
    },{
        path:'film2',
        component:Area
    },
    {
        path:'form',
        component:Form
    },
    {
        path:'task/:userid',
        component:Usertask,
        children:[
        {
            path:'tasks',
            component:Tasks
        },
        {
            path:'addtask',
            component:Addtask
        }
        ],data:{
            massege:'hello'
        }
    },
    {
        path:'secondtab',
        component:SecondTab
    },{
        path:'firsttab',
        component:FirstTab
    },{
        path:'tab',
        component:Tab
    },{
        path:'**',
        component:Notfound
    },
];
