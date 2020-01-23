class BaseDao {
  constructor(Model) {
    this.Model = Model;
  }

  get(id, options) {
    return this.Model.findByPk(id, options);
  }

  list(filter, options) {
    const pagination = { ...filter.pagination };
    
    const pager = pagination ? { offset: (pagination.page - 1) * pagination.pageSize, limit: pagination.pageSize  } : {}
    delete filter.pagination;

    return this.Model.findAndCountAll({ where: { ...filter }, ...pager, ...options })
      .then(res => {

        const parsedPagination = pagination
          ? {
            page: pagination.page,
            pageSize: pagination.pageSize,
            totalCount: res.count
          }
          : {};
        return {
          data: res.rows,
          ...parsedPagination
        }
      })
  }

  create(entity, options = {}) {
    return this.Model.create(entity, options);
  }

  update(id, entity, options = {}) {
    return this.Model.update(entity, { where: { id }, ...options });
  }

  delete(id, options = {}) {
    return this.Model.destroy({ where: { id }, ...options });
  }
}

module.exports = BaseDao;