import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BaseButtonComponent {
  @Input() isDisabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  public onSubmitButton(): void {
    this.clicked.emit();
  }
}
