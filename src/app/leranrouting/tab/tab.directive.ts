import { Directive, HostListener, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[directive]',
    // host:{'(click)':'gopage($event)'}
 })
export class NameDirective {
    from=input('my-app')
    template=inject(TemplateRef)
    containerref=inject(ViewContainerRef)
    @HostListener('click',['$event']) 
    
    gopage(event:MouseEvent){
        // let address=(event.target as HTMLAnchorElement).href;
        // (event.target as HTMLAnchorElement).href=address+this.from
        
    }
    
    constructor() { 
            this.containerref.createEmbeddedView(this.template)
    }
    

}