export default class BaseFilter {
  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }

  page: number;
  pageSize: number;
}