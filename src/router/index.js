import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Documents from '../pages/Documents'
import News from '../pages/News'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: 'home',
      name: 'Home',
      component: Home,
    },
    {
      path: 'news',
      name: 'News',
      component: News,
    },
    {
      path: 'documents',
      name: 'Documents',
      component: Documents,
    },
  ],
})
