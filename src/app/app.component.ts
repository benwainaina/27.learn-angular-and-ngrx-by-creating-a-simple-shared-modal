import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedModalComponent } from '../../projects/shared/src/lib/modal/shared-modal/shared-modal.component';
import { Observable } from 'rxjs';
import { selectDataUtility } from '../../projects/shared/src/lib/utilities/selectData.utility';

import { IModalData } from '../../projects/shared/src/lib/state-manager/interfaces';
import { selectModalData } from '../../projects/shared/src/lib/state-manager/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedModalComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public modalData$: Observable<IModalData> =
    selectDataUtility()(selectModalData);

  public links: Array<{ label: string; value: string }> = [
    { label: 'Profile', value: 'profile' },
    { label: 'Cart', value: 'cart' },
  ];
}
