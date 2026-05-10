import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'darage'
})

export class NamePipe implements PipeTransform {
    transform(value: string|number, ) {
        let val
        if( typeof value==='string'){
            val=parseFloat(value)
        }else{
            val=value
        }
        let output=val/100
        return `${output}`
        
    }
}