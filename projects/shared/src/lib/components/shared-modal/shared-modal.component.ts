import {
  Component,
  Input,
  ViewChild,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { dispatchActionUtility } from '../../utilities/dispatchAction.utility';
import { ActionSetModalData } from '../../state-manager/actions';
import { IModalData } from '../../state-manager/interfaces';
import { IDynamicKey } from '../../interfaces';
import { MODAL_INJECTED_COMPONENTS_MAPPING } from './modal-component-mapping';

@Component({
  selector: 'lib-shared-modal',
  standalone: true,
  imports: [],
  templateUrl: './shared-modal.component.html',
  styleUrl: './shared-modal.component.scss',
})
export class SharedModalComponent {
  @Input({ required: true })
  public modalData!: IModalData;

  private _outlet = viewChild('outlet', { read: ViewContainerRef });

  /**
   * Below is how things were done before signals
   */
  @ViewChild('outlet2', { static: true, read: ViewContainerRef })
  private _outlet2!: ViewContainerRef;

  private _dispatchActionUtility = dispatchActionUtility();

  ngOnInit(): void {
    this._injectModalComponent();
  }

  private _injectModalComponent(): void {
    const outlet = this._outlet();
    const componentToInject = (
      MODAL_INJECTED_COMPONENTS_MAPPING as IDynamicKey
    )[this.modalData.component];
    console.log('this.modalData.component', this.modalData.component);
    if (outlet && componentToInject) {
      outlet.clear();
      const componentInstance: any = outlet.createComponent(componentToInject);
      componentInstance.instance.payload = this.modalData.payload;
    }
  }

  public dismiss(): void {
    this._dispatchActionUtility(ActionSetModalData, undefined);
  }
}
