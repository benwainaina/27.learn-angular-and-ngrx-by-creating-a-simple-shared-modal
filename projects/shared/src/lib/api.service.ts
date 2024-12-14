import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDynamicKey } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _httpClient: HttpClient = inject(HttpClient);

  public post<T>(url: string, payload: IDynamicKey): Observable<T> {
    console.log('payload', payload);
    /**
     * sustitute the below mock with your endpoints
     */
    return new Observable((subscriber) => {
      subscriber.next({} as any);
    });
    // return this._httpClient.post<T>(url, payload);
  }
}
