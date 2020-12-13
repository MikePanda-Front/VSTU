import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Documents from '../pages/Documents'
import DocumentsAdmin from '../pages/DocumentsAdmin'
import Login from '../pages/Login'
import Auth from '../pages/Auth'
import News from '../pages/News'
import NewsItem from '../pages/NewsItem'

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
      path: 'news/:id',
      name: 'NewsItem',
      component: NewsItem,
    },
    {
      path: 'documents',
      name: 'Documents',
      component: Documents,
    },
    {
      path: 'documentsAdmin',
      name: 'DocumentsAdmin',
      component: DocumentsAdmin,
    },
    {
      path: 'login',
      name: 'Login',
      component: Login,
    },
    {
      path: 'auth',
      name: 'Auth',
      component: Auth,
    },
  ],
})
