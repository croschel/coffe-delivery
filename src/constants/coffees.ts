import { CoffeeType } from '@/models/enum/coffeeType';
import { Coffee } from '@/models/interfaces/coffee';
import Expresso from '@/assets/Expresso.png';
import Americano from '@/assets/Americano.png';
import ExpCremoso from '@/assets/ExpressoCremoso.png';
import ExpGelado from '@/assets/CafeGelado.png';
import CoffeeMilk from '@/assets/CafeComLeite.png';
import Latte from '@/assets/Latte.png';
import Cappucino from '@/assets/Capuccino.png';
import Macchiato from '@/assets/Macchiato.png';
import Mocaccino from '@/assets/Mochaccino.png';
import HotChocolate from '@/assets/ChocolateQuente.png';
import Cubano from '@/assets/Cubano.png';
import Havaiano from '@/assets/Havaiano.png';
import Arabe from '@/assets/Arabe.png';
import Irlandes from '@/assets/Irlandes.png';

export const COFFEES: Coffee[] = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    qnt: 0,
    image: Expresso,
    tagType: [CoffeeType.TRADITIONAL],
    value: 12.0,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    qnt: 0,
    image: Americano,
    tagType: [CoffeeType.TRADITIONAL],
    value: 13.0,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    qnt: 0,
    image: ExpCremoso,
    tagType: [CoffeeType.TRADITIONAL],
    value: 14.0,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    qnt: 0,
    image: ExpGelado,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.COLD],
    value: 17.0,
  },
  {
    id: '5',
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    qnt: 0,
    image: CoffeeMilk,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    value: 14.0,
  },
  {
    id: '6',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    qnt: 0,
    image: Latte,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    value: 18.0,
  },
  {
    id: '7',
    title: 'Cappucino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    qnt: 0,
    image: Cappucino,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    value: 17.0,
  },
  {
    id: '8',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    qnt: 0,
    image: Macchiato,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    value: 18.0,
  },
  {
    id: '9',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    qnt: 0,
    image: Mocaccino,
    tagType: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    value: 16.0,
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    qnt: 0,
    image: HotChocolate,
    tagType: [CoffeeType.SPECIAL, CoffeeType.WITH_MILK],
    value: 19.0,
  },
  {
    id: '11',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    qnt: 0,
    image: Cubano,
    tagType: [CoffeeType.SPECIAL, CoffeeType.ALCOOLIC, CoffeeType.WITH_MILK],
    value: 16.0,
  },
  {
    id: '12',
    title: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    qnt: 0,
    image: Havaiano,
    tagType: [CoffeeType.SPECIAL],
    value: 22.0,
  },
  {
    id: '13',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    qnt: 0,
    image: Arabe,
    tagType: [CoffeeType.SPECIAL],
    value: 19.0,
  },
  {
    id: '14',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    qnt: 0,
    image: Irlandes,
    tagType: [CoffeeType.SPECIAL, CoffeeType.ALCOOLIC],
    value: 19.0,
  },
];
