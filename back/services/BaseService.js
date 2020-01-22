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
      return await dao.list(filter);
    }
    catch(error) {
      throw error;
    }
  }

  async create(entity) {
    try {
      const dao = new this.Dao();
      return await dao.create(entity);
    } catch (error) {
      throw error;
    }
  }

  async update(id, entity) {
    try {
      const dao = new this.Dao();
      return await dao.update(id, entity);
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const dao = new this.Dao();
      return await dao.delete(id);
    } catch (error) {
      throw error;
    }
  }
  
};

module.exports = BaseService;