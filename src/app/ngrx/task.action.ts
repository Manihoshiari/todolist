import { createAction, props } from "@ngrx/store";

export const addtask=createAction(
    '[task]addtask',
    props<{task:string}>()
)