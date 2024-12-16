import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedModalComponent } from '../../projects/shared/src/lib/components/shared-modal/shared-modal.component';
import { Observable } from 'rxjs';
import { selectDataUtility } from '../../projects/shared/src/lib/utilities/selectData.utility';

import { IModalData } from '../../projects/shared/src/lib/state-manager/interfaces';
import { selectModalData } from '../../projects/shared/src/lib/state-manager/selectors';
import { AsyncPipe } from '@angular/common';
import { dispatchActionUtility } from '../../projects/shared/src/lib/utilities/dispatchAction.utility';
import { ActionSetModalData } from '../../projects/shared/src/lib/state-manager/actions';
import {
  MODAL_INJECTED_COMPONENT_NAMES,
  MODAL_INJECTED_COMPONENTS_MAPPING,
} from '../../projects/shared/src/lib/components/shared-modal/modal-component-mapping';

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

  private _dispatchActionUtility = dispatchActionUtility();

  public links: Array<{ label: string; value: string }> = [
    { label: 'Profile', value: 'profile' },
    { label: 'Cart', value: 'cart' },
  ];

  public openHelp(): void {
    this._dispatchActionUtility(ActionSetModalData, {
      data: {
        component: MODAL_INJECTED_COMPONENT_NAMES.sharedHelpComponent,
      },
    });
  }
}
