import { DecimalPipe } from '@angular/common';
import fa from '@angular/common/locales/fa';
import fi from '@angular/common/locales/fi';
import tr from '@angular/common/locales/tr';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [DecimalPipe],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {

  parsedDisplay: number = 0
  display: string = ''
  operator: string = ''
  firstNumber: string = ''
  parseNumberOne: number = 0
  parseNumberTwo: number = 0
  secondNumber: string = ''


  number(e: string) {
    this.display += e

  }

  @HostListener('keydown', ['$event']) keydown(k: KeyboardEvent) {
    if (('1234567890').includes(k.key)) {
      this.number(k.key)
    }
    else if (k.key === 'Escape') {
      this.cleartext()
    } else if (k.key === 'Backspace') {
      this.deleteText()
    } else if (('-+/*').includes(k.key)) {
      this.action(k.key)
    } else if (k.key === '.') {
      this.adddot(k.key)
    } else if (k.key === 'Enter') {
      this.equal()
    } else if (k.key === '%') {
      this.percentNumber(k.key)
    }
  }

  action(e: any) {
    this.firstNumber = this.display
    this.parseNumberOne = parseFloat(this.firstNumber)
    this.display = ''
    this.operator = e
  }

  cleartext() {
    this.display = ''
    this.operator = ''
  }
  
  percentNumber(e: any) {
    if (this.operator == '+' || this.operator == '-') {
      this.parsedDisplay = parseFloat(this.display)
      this.parsedDisplay = this.parseNumberOne * (this.parsedDisplay / 100)
      this.display = this.parsedDisplay.toString()
    }
    if (this.operator == '*' || this.operator == '/') {
      this.parsedDisplay = parseFloat(this.display)
      this.parsedDisplay = (this.parsedDisplay / 100)
      this.display = this.parsedDisplay.toString()

    }
  }
  deleteText() {
    this.display = this.display.slice(0, -1)
  }
  equal() {

    this.secondNumber = this.display
    this.parseNumberTwo = parseFloat(this.secondNumber)
    if (this.operator === '+') {
      this.parseNumberOne += this.parseNumberTwo
      this.display = this.parseNumberOne.toString()
    } else if (this.operator === '-') {
      this.parseNumberOne -= this.parseNumberTwo
      this.display = this.parseNumberOne.toString()
    } else if (this.operator === '*') {
      this.parseNumberOne *= this.parseNumberTwo
      this.display = this.parseNumberOne.toString()
    } else if (this.operator === "/") {
      this.parseNumberOne /= this.parseNumberTwo
      this.display = this.parseNumberOne.toString()
    }
    this.operator = ''
    this.firstNumber = ''
  }

  adddot(e: any) {
    if (!this.display.includes('.')) {
      this.display += e
    }
  }
}
