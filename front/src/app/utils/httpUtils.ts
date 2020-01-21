import { HttpParams } from '@angular/common/http'

export function toHttpParams(object): HttpParams {
  let params = new HttpParams();
  let params2 = new HttpParams({ fromObject: object });

  Object.keys(object)
    .filter(k => object[k])
    .forEach(k => {
      params = params.set(k, JSON.stringify(object[k]))
  })
  return params2;
}