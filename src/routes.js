import OrderContainer from '@/components/Container'
import OrderCommodity from '@/components/Commodity'
import OrderAbout from '@/components/About'
import OrderGame from '@/components/Games'

export default [
  {path: '/', name: 'OrderContainer', component: OrderContainer},
  {path: '/commodity', name: 'OrderCommodity', component: OrderCommodity},
  {path: '/container', name: 'OrderContainer', component: OrderContainer},
  {path: '/about', name: 'OrderAbout', component: OrderAbout},
  {path: '/games', name: 'OrderGame', component: OrderGame}
]
