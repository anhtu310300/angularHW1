import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-1',
  imports: [FormsModule, NgIf],
  templateUrl: './task-1.html',
  styleUrl: './task-1.css',
})
export class Task1 {
  selectedGender: string = '';
}
