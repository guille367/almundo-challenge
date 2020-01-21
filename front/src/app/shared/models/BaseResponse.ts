export default class BaseResponse<T> {
  data: Array<T>;
  page: number;
  pageSize: number;
  totalCount: number;
}