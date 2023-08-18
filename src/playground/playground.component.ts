import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';
import { BaseLoadingButtonComponent } from '../base-loading-button/base-loading-button.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  standalone: true,
  imports: [CommonModule, BaseButtonComponent, BaseLoadingButtonComponent],
})
export class PlaygroundComponent {
  public cancelLoading(cancelable: () => void): void {
    setTimeout(() => cancelable(), 2000);
  }
}
