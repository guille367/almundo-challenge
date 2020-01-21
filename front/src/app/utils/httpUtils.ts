import { HttpParams } from '@angular/common/http'

export function toHttpParams(object): HttpParams {
  return new HttpParams({ fromObject: object });
}