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
    console.log(filter)
    return this.Model.findAll({ where: {...filter}, ...pagination, ...options});
  }
}

module.exports = BaseDao;