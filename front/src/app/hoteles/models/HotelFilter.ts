import BaseFilter from '../../shared/models/BaseFilter';

export default class HotelFilter extends BaseFilter {
  constructor() {
    super(1, 495);
  }

  name: string = "";
  stars: Array<number>;
}