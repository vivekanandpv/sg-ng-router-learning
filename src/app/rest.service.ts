import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private httpClient = inject(HttpClient);

  get<TRes>(url: string): Observable<TRes> {
    return this.httpClient.get<TRes>(url);
  }

  post<TReq, TRes>(url: string, body: TReq): Observable<TRes> {
    return this.httpClient.post<TRes>(url, body);
  }

  put<TReq, TRes>(url: string, body: TReq): Observable<TRes> {
    return this.httpClient.put<TRes>(url, body);
  }

  patch<TReq, TRes>(url: string, body: TReq): Observable<TRes> {
    return this.httpClient.patch<TRes>(url, body);
  }

  delete(url: string): Observable<object> {
    return this.httpClient.delete(url);
  }
}
