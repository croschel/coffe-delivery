import { CoffeeType } from '../enum/coffeeType';

export interface Coffee {
  id: string;
  tagType: CoffeeType[];
  title: string;
  image: string;
  description: string;
  value: number;
}
