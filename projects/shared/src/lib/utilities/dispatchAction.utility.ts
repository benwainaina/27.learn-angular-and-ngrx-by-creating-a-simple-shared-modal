import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDynamicKey } from '../interfaces';

let STORE: Store;

export const dispatchActionUtility = () => {
  if (!STORE) {
    STORE = inject(Store);
  }

  return (action: any, payload: IDynamicKey = {}) =>
    STORE.dispatch(action(payload));
};
