import {v4} from 'uuid'


export const links = [
  {
    id: v4(),
    label: 'Cupons',
    url: 'cupons'
  },
  {
    id: v4(),
    label: 'Mais vendidos',
    url: 'maisvendidos'
  },
  {
    id: v4(),
    label: 'Promoções',
    url:'promocoes'
  },
]

export const categories = [
  {
    label: 'Categorias',
    items: ['Smartphones', 'Computadores', 'Acessórios', 'Ferramentas', 'Beleza', 'PetShop', 'Casa&Móveis'],
  },
]