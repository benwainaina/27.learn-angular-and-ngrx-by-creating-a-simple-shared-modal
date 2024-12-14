import {
  IProfileState,
  profileFeatureKey,
} from '../../../profile/src/lib/state-manager/interfaces';
import { ISharedState, sharedFeatureKey } from './state-manager/interfaces';

export interface IDynamicKey {
  [key: string]: any;
}

export interface IAppState {
  [sharedFeatureKey]: ISharedState;
  [profileFeatureKey]: IProfileState;
}
