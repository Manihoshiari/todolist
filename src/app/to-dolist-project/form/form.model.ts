export interface newTask{
[x: string]: any
    id:string
    taskstats:string
    taskname?:string
    describion?:string
    assignees?:string
    date?:string
    pririty:string
    flag:boolean
    
}
export interface assignees{
    id:string
    name:string
    img:string
}