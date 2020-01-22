class BaseDao {
  constructor(Model) {
    this.Model = Model;
  }

  get(id, options) {
    return this.Model.findByPk(id, options);
  }

  list(filter, options) {
    const { pagination } = filter
    delete filter.pagination
    return this.Model.findAndCountAll({ where: {...filter}, ...pagination, ...options})
      .then(res => {
        if(pagination) {
          const parsedPagination = pagination ? { page: pagination.offset + 1, pageSize: pagination.limit, totalCount: res.count } : {};
          return {
            data: res.rows,
            ...parsedPagination
          }
        }
        return res
    });
  }
}

module.exports = BaseDao;