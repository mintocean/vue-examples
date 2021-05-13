import Vue from 'vue'
import Router from 'vue-router'

import TwitterList from '@/components/TwitterList'
import TwitterDetail from '@/components/TwitterDetail'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes : [
        {
            path: "/",
            name: "TwitterList",
            component: TwitterList
        },
        {
            path: "/detail/:id",
            name : "TwitterDetail",
            component: TwitterDetail,
            props: true
        }
    ]
})