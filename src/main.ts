import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, PlaygroundComponent],
  template: `
    <app-playground></app-playground>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
