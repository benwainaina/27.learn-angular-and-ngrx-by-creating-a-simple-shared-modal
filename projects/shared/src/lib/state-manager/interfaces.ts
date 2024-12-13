import { IDynamicKey } from '../interfaces';

export interface IModalData {
  /**
   * angular component will be passed in
   */
  component: any;

  /**
   * payload which can be of any type
   */
  payload: IDynamicKey;
}

export const sharedFeatureKey = 'shared';

export interface ISharedState {
  /**
   * data to be passed into the shared overlay
   */
  modalData?: IModalData;
}
