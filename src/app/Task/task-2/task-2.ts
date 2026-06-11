import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-2',
  imports: [NgIf],
  templateUrl: './task-2.html',
  styleUrl: './task-2.css',
})
export class Task2 {
  selectedCategory: string = '';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
