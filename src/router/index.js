import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import AllUsableTemplate from "../views/AllUsableTemplate";
import BuildTemplateInfo from "../views/BuildTemplateInfo";
import FindAvailableTemplate from "../views/FindAvailableTemplate";
import buildTemplate from "../views/template/buildTemplate";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/template/build',
      name: 'buildTemplate',
      component: buildTemplate
    }
    ,
    {
      path: '/coupon-template/template/sdk/all',
      name: 'allUsableTemplate',
      component: AllUsableTemplate
    },
    {
      path: '/coupon-template/template/info',
      name: 'buildTemplateInfo',
      component: BuildTemplateInfo
    },
    {
      path: '/coupon-distribution/template',
      name: 'findAvailableTemplate',
      component: FindAvailableTemplate
    },
  ]
})
