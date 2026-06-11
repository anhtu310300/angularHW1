import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-4',
  imports: [FormsModule, NgIf],
  templateUrl: './task-4.html',
  styleUrl: './task-4.css',
})
export class Task4 {
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';

  state: string = '';
  city: string = '';

  selectedRole: string = '';

  submitForm() {
    this.fullName = this.firstName + ' ' + this.lastName;
  }
}
