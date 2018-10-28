import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import Search from '@/components/Search/Search'
import Cart from '@/components/Cart/Cart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList';
import PhotoDetail from '@/components/Photo/PhotoDetail';

//挂载vue-router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip,
      meta: {
        title: 'Vip'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        title: '查找'
      }
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: NewsList,
      meta: {
        title: '新闻列表'
      }
    },
    {
      path: '/newsdetail/:id',
      name: 'newsdetail',
      component: NewsDetail,
      meta: {
        title: '新闻详情'
      }
    },
    {
      path: '/photos/list/:id',
      name: 'photolist',
      component: PhotoList,
      meta: {
        title: '图片分享列表'
      }
    }
  ]
})
