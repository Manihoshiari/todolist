import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../form/form.model';

@Component({
  selector: 'app-addnewtask',
  imports: [FormsModule],
  templateUrl: './addnewtask.html',
  styleUrl: './addnewtask.css',
})
export class Addnewtask {
  addnewtask=output()
  importnewtask=output<newTask>()
  file!:newTask
add(){
  this.addnewtask.emit()

}

readtext(e:any){
const file=e.target.files[0]
if(file){
  const reader=new FileReader()
  reader.onload=((e:any)=>{
    const content=e.target.result
    this.file=JSON.parse(content)
     this.importnewtask.emit(this.file)
  })
 
   reader.readAsText(file);
  
}


}
}
