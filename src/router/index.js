import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import BuildTemplate from "../views/BuildTemplate";
import AllUsableTemplate from "../views/AllUsableTemplate";
import BuildTemplateInfo from "../views/BuildTemplateInfo";
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
      path: '/coupon-template/template/build',
      name: 'buildTemplate',
      component: BuildTemplate
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
  ]
})
