import Amenity from './Amenity';

export default class HotelResponse {
  constructor() { }

  id: number;
  name: string;
  stars: Array<number>;
  price: number;
  image: string;
  amenities: Array<Amenity>;
}