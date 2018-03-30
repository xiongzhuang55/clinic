import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Video from '@/components/video'
import News from '@/components/news'
import Company from '@/components/about/company'
import Honor from '@/components/about/honor'
import Vision from '@/components/about/vision'
import Propagate from '@/components/about/propagate'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/company',
      name: 'Company',
      component: Company,
    },
    {
      path: '/honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/vision',
      name: 'Vision',
      component: Vision
    },
    {
      path: '/propagate',
      name: 'Propagate',
      component: Propagate
    }
  ]
})
