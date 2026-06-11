import { Routes } from '@angular/router';
import { Task1 } from './Task/task-1/task-1';
import { Task2 } from './Task/task-2/task-2';
import { Task3 } from './Task/task-3/task-3';
import { Task4 } from './Task/task-4/task-4';

export const routes: Routes = [
  { path: '', redirectTo: 'task-1', pathMatch: 'full' },
  { path: 'task-1', component: Task1 },
  { path: 'task-2', component: Task2 },
  { path: 'task-3', component: Task3 },
  { path: 'task-4', component: Task4 },
];
