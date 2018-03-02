import { NbMenuItem } from '@nebular/theme';
import { StoreComponent } from './store/store.component';
//import {FoodComponent} from './store/food/food.component'
export const MENU_ITEMS: NbMenuItem[] = [

   { title: 'Dashboard', icon: 'nb-paper-plane', link: '/dashboard', home: true },
  {
    title: 'Store',

    icon: '  fa fa-shopping-bag	  ',

    link: '/dashboard/store',
    children: [

      {
        title: 'Food Store (C3)',
        icon: 'fa fa-cutlery',
        link: '/dashboard/store/foodstore',
      },


  ]
  },
  {
    title: 'My Items',
    icon: 'fa fa-shopping-basket	',
    link: '/dashboard/myitems'

  },
  {
    title: 'Cart',
    icon: 'fa fa-cart-arrow-down',
    link: '/dashboard/items'
  },
  {
    title: 'Auth',
    icon: 'fa fa-lock	',
    children: [{
      title: 'Login',
      icon: 'fa fa-sign-in',
      link: '/dashboard/authe/login',
    },{
      title: 'Sign up',
      icon: 'fa fa-user-plus',
      link: '/dashboard/authe/signup',
    }]
  }
];
