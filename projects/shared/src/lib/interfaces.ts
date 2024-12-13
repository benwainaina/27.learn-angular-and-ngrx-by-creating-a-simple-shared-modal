import { ISharedState, sharedFeatureKey } from './state-manager/interfaces';

export interface IDynamicKey {
  [key: string]: any;
}

export interface IAppState {
  [sharedFeatureKey]: ISharedState;
}
