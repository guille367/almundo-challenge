import Amenity from './Amenity';

export default class Hotel {
  constructor() { }

  id: number;
  name: string;
  stars: Array<number>;
  price: number;
  image: string;
  amenities: Array<Amenity>;
}