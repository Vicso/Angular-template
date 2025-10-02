import { Component, signal } from '@angular/core';
import { ConsoleList } from './modules/console-list/console-list';

@Component({
  selector: 'app-root',
  imports: [ConsoleList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-template');
}
