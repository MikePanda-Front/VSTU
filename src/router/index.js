import VueRouter from 'vue-router'
import News from '../pages/News'

export default new VueRouter({
  mode: 'history',
  routes : [
    {
      path: 'news',
      name: 'News',
      component: News
    }
  ]
})
