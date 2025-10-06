import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../core/services/console.service';
import { Console } from '../../core/models/console.model';

@Component({
  selector: 'app-console-list',
  imports: [],
  templateUrl: './console-list.html',
  styleUrl: './console-list.css'
})
export class ConsoleList implements OnInit {
  consoles: Console[] = [];

  constructor(private consoleService: ConsoleService) {}

  ngOnInit() {
    this.consoleService.getConsoles().subscribe(data => {
      this.consoles = data;
    });
  }
}

