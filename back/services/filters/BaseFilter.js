class BaseFilter {
  constructor(page, pageSize) {
    this.pagination = {
      page: page || 1,
      pageSize: pageSize || 10
    }
  }
  
}

module.exports = BaseFilter;