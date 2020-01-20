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
      const dao = new this.Dao()
      const res = await dao.list(filter)
      return res
    }
    catch(error) {
      throw error
    }
  }
};

module.exports = BaseService;