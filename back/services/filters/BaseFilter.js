class BaseFilter {
  constructor(page, pageSize) {
    this.pagination = {
      offSet: page ? page - 1 : 0,
      limit: pageSize || 10
    }
  }
  
}

module.exports = BaseFilter;