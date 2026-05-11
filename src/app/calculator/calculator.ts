import { DecimalPipe } from '@angular/common';
import {  Component, HostListener } from '@angular/core';
import { buttons } from './calculator.model';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {

  ParsedDisplay: number = 0
  Display: string = ''
  Operator: string = ''
  FirstNumber: string = ''
  ParseNumberOne: number = 0
  ParseNumberTwo: number = 0
  SecondNumber: string = ''
  value:string=''
  
  Buttons:buttons[]=[{
    name: 'C',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.cleartext()
      
     }
    ,
    style: 'text-blue-600'
  },{
    name: '/',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.action('/')
      
    }
    ,
    style: 'text-blue-600'
  },{
    name: '*',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.action('*')}
    ,
    style: 'text-blue-600'
  },{
    name: 'del',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.DeleteText()}
    ,
    style: 'text-blue-600'
  },{
    name: '7',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('7')}
    ,
    
  },{
    name: '8',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('8')}
    ,
    
  },
  {
    name: '9',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('9')}
    ,
    
  },{
    name: '-',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.action('-')}
    ,
    style: 'text-blue-600'
  },
  {
    name: '4',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('4')}
    ,
    
  },
  {
    name: '5',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('5')}
    ,
    
  },
  {
    name: '6',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('6')}
    ,
    
  },
  {
    name: '+',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.action('+')}
    ,
    style: 'text-blue-600'
  },{
    name: '1',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('1')}
    ,
    
  },{
    name: '2',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('2')}
    ,
    
  },{
    name: '3',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('3')}
    ,
  },{
    name: '=',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.equal()}
    ,
    style: 'bg-blue-600! row-span-2'
  },{
    name: '.',
    click: (e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.AddDot('.')}
    ,
  },{
    name: '0',
    click:(e:MouseEvent)=>{
      (e.target as HTMLElement).blur()
      this.number('0')},
  },
  {
    name: '%',
    click: (e:MouseEvent)=> {
      (e.target as HTMLElement).blur()
      this.percentNumber()},
  }
]

  number(e: string) {
    this.value +=e
    let parts=this.value.split('.')
    let int=parts[0]
    let float=parts[1]
    let result=''
    let count=0
    
    for (let i = int.length-1; i >= 0; i--) {
      result=int[i]+result
      count++
      if(count%3===0 && i!==0){
        result=','+result

        
      }
      
    } 
    
    if(float){
        result+='.'+float
      }
    this.Display=result


  }

  @HostListener('keydown', ['$event']) keydown(k: KeyboardEvent) {
  
    if (('1234567890').includes(k.key)) {
      this.number(k.key)
    }
    else if (k.key === 'Escape') {
      this.cleartext()
    } else if (k.key === 'Backspace') {
      this.DeleteText()
    } else if (('-+/*').includes(k.key)) {
      this.action(k.key)
    } else if (k.key === '.') {
      this.AddDot(k.key)
    } else if (k.key === 'Enter') {
      this.equal()
    } else if (k.key === '%') {
      this.percentNumber()
    }
  }

  action(e: string) {

      this.FirstNumber = this.value
  
    this.ParseNumberOne = parseFloat(this.FirstNumber)   
    
    this.Operator = e
    this.Display = ''
    this.value=''
    
    this.Display+=e
    this.value+=e
    
    
  }

  cleartext() {
    this.Display = ''
    this.Operator = ''
    this.FirstNumber=''
    this.value=''
  }
  
  percentNumber() {
    
    if (this.Operator == '+' || this.Operator == '-') {
      this.ParsedDisplay = parseFloat(this.value)
      this.ParsedDisplay = this.ParseNumberOne * (this.ParsedDisplay / 100)
      this.value = this.ParsedDisplay.toString()
    }
    if (this.Operator == '*' || this.Operator == '/') {
      this.ParsedDisplay = parseFloat(this.value)
      this.ParsedDisplay = (this.ParsedDisplay / 100)
      this.value = this.ParsedDisplay.toString()

    }
    this.Display=this.value
  }
  DeleteText() {
    this.value = this.value.slice(0, -1)
    this.Display=this.value
    if(this.Display==='' && this.Operator===''){
      this.FirstNumber=this.FirstNumber.slice(0,-1)
    } 
    if(this.Display===''){
      this.Operator=''
    }
    

  }
  equal() {
    
    this.SecondNumber = this.value.slice(1)
    this.ParseNumberTwo = parseFloat(this.SecondNumber)
    
    
    if (this.Operator === '+') {
      this.ParseNumberOne += this.ParseNumberTwo
      this.value = this.ParseNumberOne.toString()
    } else if (this.Operator === '-') {
      console.log(this.ParseNumberOne,this.ParseNumberTwo);
      
      this.ParseNumberOne =this.ParseNumberOne- this.ParseNumberTwo

      this.value = this.ParseNumberOne.toString()
    } else if (this.Operator === '*') {
      this.ParseNumberOne *= this.ParseNumberTwo
      this.value = this.ParseNumberOne.toString()
    } else if (this.Operator === "/") {
      this.ParseNumberOne /= this.ParseNumberTwo
      this.value = this.ParseNumberOne.toString()
    }
    this.Operator = ''
    
    this.FirstNumber = ''
    this.Display=Number(this.value).toLocaleString()
  }

  AddDot(e: string){
    
    if (!this.Display.includes('.')) {
      this.value += e
      this.Display=this.value 
    }

  }
}
