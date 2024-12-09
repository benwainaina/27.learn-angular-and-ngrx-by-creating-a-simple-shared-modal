import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public links: Array<{ label: string; value: string }> = [
    { label: 'Profile', value: 'profile' },
    { label: 'Cart', value: 'cart' },
  ];
}
