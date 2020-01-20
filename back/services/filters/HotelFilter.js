const BaseFilter = require('./BaseFilter')
const { Op } = require("sequelize");

class HotelFilter extends BaseFilter {
  constructor(filter) {
    const { page, pageSize, name, stars } = filter;
    super(page, pageSize)

    this.name = { [Op.iLike]: `%${name || ''}%` };
    this.stars = stars ? { [Op.in]: JSON.parse(stars) } : null;
  }
};

module.exports = HotelFilter;