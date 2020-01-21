import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndpointsConfig } from '../../config/endpoints.config';
import { Observable } from 'rxjs';
import HotelFilter from '../models/HotelFilter';
import { toHttpParams } from 'src/app/utils/httpUtils';
import Hotel from '../models/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private http: HttpClient) { }

  getHoteles(filter?: HotelFilter): Observable<Array<Hotel>> {
    const params = toHttpParams(filter)
    return this.http.get<Array<Hotel>>(EndpointsConfig.HOTELS, { params });
  }
}
