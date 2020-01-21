class BaseService {
  constructor(Dao) {
    this.Dao = Dao
  }

  async get(id) {
    try {
      const dao = new this.Dao()
      const res = await dao.get(id)
      return res
    }
    catch(error) {
      throw error
    }
  }

  async list(filter) {
    try {
      const dao = new this.Dao();
      const { pagination } = filter;
      const res = await dao.list(filter);
      let response = res;

      if(pagination) {
        const parsedPagination = pagination ? { page: pagination.offSet + 1, pageSize: pagination.limit, totalCount: res.count } : {};
        response = {
          data: res.rows,
          ...parsedPagination
        }
      }

      
      return response
    }
    catch(error) {
      throw error
    }
  }
};

module.exports = BaseService;