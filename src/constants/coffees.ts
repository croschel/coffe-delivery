import { CoffeeType } from '@/models/enum/coffeeType';
import { Coffee } from '@/models/interfaces/coffee';
import Expresso from '@/assets/Expresso.png';
import Americano from '@/assets/Americano.png';
import ExpCremoso from '@/assets/ExpressoCremoso.png';
import ExpGelado from '@/assets/CafeGelado.png';

export const COFFEES: Coffee[] = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: Expresso,
    tagType: [CoffeeType.TRADITIONAL],
    value: 12.0,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: Americano,
    tagType: [CoffeeType.TRADITIONAL],
    value: 13.0,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: ExpCremoso,
    tagType: [CoffeeType.TRADITIONAL],
    value: 14.0,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: ExpGelado,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.COLD],
    value: 17.0,
  },
];
