import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

let STORE: Store;

export const selectDataUtility = () => {
  if (!STORE) {
    STORE = inject(Store);
  }

  return <Type>(selector: any): Observable<Type> => STORE.select(selector);
};
