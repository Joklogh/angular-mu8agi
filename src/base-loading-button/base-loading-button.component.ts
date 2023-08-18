import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-base-loading-button',
  templateUrl: './base-loading-button.component.html',
  styleUrls: ['./base-loading-button.component.scss'],
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
})
export class BaseLoadingButtonComponent {
  @Input() isDisabled: boolean = false;
  @Output() clicked = new EventEmitter<() => void>();

  @HostBinding('class.loading') isLoading = false;

  public onSubmitButton(): void {
    this.isLoading = true;
    this.clicked.emit(() => (this.isLoading = false));
  }
}
