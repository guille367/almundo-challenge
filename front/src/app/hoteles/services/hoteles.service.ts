import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndpointsConfig } from '../../config/endpoints.config';
import { Observable } from 'rxjs';
import HotelFilter from '../models/HotelFilter';
import { toHttpParams } from 'src/app/utils/httpUtils';
import { HotelResponse } from '../models/HotelResponse';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  onFilterUpdate = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getHoteles(filter?: HotelFilter): Observable<HotelResponse> {
    const params = toHttpParams(filter)
    return this.http.get<HotelResponse>(EndpointsConfig.HOTELS, { params });
  }
}
