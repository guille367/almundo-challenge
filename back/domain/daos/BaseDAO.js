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