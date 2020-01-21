import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndpointsConfig } from '../../config/endpoints.config';
import { Observable } from 'rxjs';
import HotelFilter from '../buscador/models/HotelFilter';
import { toHttpParams } from 'src/app/utils/httpUtils';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private http: HttpClient) { }

  getHoteles(filter: HotelFilter): Observable<any> {
    const params = toHttpParams(filter)
    console.log(params.get('stars'))
    return this.http.get(EndpointsConfig.HOTELS, { params });
  }
}
