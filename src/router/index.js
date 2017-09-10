import Vue from 'vue'
import VueRouter from 'vue-router';

import addresslist from 'components/addresslist/addresslist'
import homepage from 'components/homepage/homepage'
import msg from 'components/msg/msg'
import my from 'components/my/my'
import associationlist from 'components/associationlist'
import messcenter from 'components/messcenter'
import login from 'components/login'
import Hello from 'components/Hello'
import activity from 'components/activity'
import associationdt from 'components/associationdt'
import miendetails from 'components/miendetails'

Vue.use(VueRouter);

let router = new VueRouter({
})

router.map({
	'/':{
      component:Hello,
      subRoutes:{
          '':{
              component:homepage
           },
           '/addresslist': {
				component: addresslist
			},
			'/homepage': {
				component: homepage
			},
			'/msg': {
				component: msg
			},
			'/my': {
				component: my
			},
			'/homepage/associationlist': {
				component: associationlist
			},
			'/homepage/messcenter': {
				component: messcenter
			},

      }
   },
  "/login":{
		component:login
	},
  "/activity/:id":{
		component:activity
	},
  "/associationdt/:id":{
		component:associationdt
	},
	"/miendetails/:id":{
		component:miendetails
	}

   


})
export default router