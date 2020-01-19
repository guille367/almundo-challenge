import BaseFilter from './BaseFilter';

export default class HotelFilter extends BaseFilter {
  constructor() {
    super(1, 10);
  }

  name: string = "asds";
  stars: Array<number>;
}