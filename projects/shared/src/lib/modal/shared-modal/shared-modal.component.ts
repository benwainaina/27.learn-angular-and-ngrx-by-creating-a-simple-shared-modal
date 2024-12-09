import { Component } from '@angular/core';

@Component({
  selector: 'lib-shared-modal',
  standalone: true,
  imports: [],
  templateUrl: './shared-modal.component.html',
  styleUrl: './shared-modal.component.scss',
})
export class SharedModalComponent {
  public dismiss(): void {
    console.log('dismissing!');
  }
}
