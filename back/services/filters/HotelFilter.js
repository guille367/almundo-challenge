const BaseFilter = require('./BaseFilter')
const { Op } = require("sequelize");
const flatten = require("lodash/flatten")

class HotelFilter extends BaseFilter {
  constructor(filter) {
    const { page, pageSize, name, stars } = filter;
    super(page, pageSize)

    this.name = { [Op.iLike]: `%${name || ''}%` };
    this.stars = stars ? { [Op.in]: flatten([stars]) } : { [Op.ne]: null };
  }
};

module.exports = HotelFilter;