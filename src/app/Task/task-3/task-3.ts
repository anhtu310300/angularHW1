import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-3',
  imports: [FormsModule, NgIf],
  templateUrl: './task-3.html',
  styleUrl: './task-3.css',
})
export class Task3 {
  showDiv1: boolean = true;
  showDiv2: boolean = true;
  showDiv3: boolean = true;

  num1: string = '';
  num2: string = '';

  showDiv1Box() {
    this.showDiv1 = true;
  }

  hideDiv1Box() {
    this.showDiv1 = false;
  }

  toggleDiv2() {
    this.showDiv2 = !this.showDiv2;
  }

  checkDiv3() {
    if (this.num1 === this.num2) {
      this.showDiv3 = true;
    } else {
      this.showDiv3 = false;
    }
  }
}
