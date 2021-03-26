import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/1.vue'
import Two from '../views/2.vue'
import Three from '../views/3.vue'
import Four from '../views/4.vue'
import Five from '../views/5.vue'
import Six from '../views/6.vue'
import Seven from '../views/7.vue'
import Detail from '../views/Detail.vue'
import MenuRouter from '../../public/jsData/MenuRouter'
const MenuList = MenuRouter.menuList
const routes = () => {
  const route = [{
    path: '/',
    name: 'Home',
    component: Home
  }]
  MenuList.forEach(oneElement => {
    // console.log("⚠检测 ~ oneElement", oneElement)
    const oneRouter = {
      path: '/' + oneElement.router,
      name: oneElement.name,
      component: Home,
      children: []
    }
    if (oneElement.list) {
      oneElement.list.forEach(twoElement => {
        if (oneElement.router) {
          const twoRouter = {
            path: '/' + oneElement.router + '/' + twoElement.router,
            name: twoElement.name,
            component: Home,
            children: []
          }
          if (twoElement.list) {
            twoElement.list.forEach(threeElement => {
              const threeRouter = {
                path: '/' + oneElement.router + '/' + twoElement.router + '/' + threeElement.router,
                name: threeElement.name,
                component: Home,
                children: []
              }
              if (threeElement.lattice) {
                threeElement.lattice.forEach(ThreeLatticeElement => {
                  if (ThreeLatticeElement.router) {
                    const threeLatticeRouter = {
                      path: '/' + oneElement.router + '/' + twoElement.router + '/' + ThreeLatticeElement.router,
                      name: ThreeLatticeElement.name,
                      component: Home,
                      children: []
                    }
                    threeRouter.children.push(threeLatticeRouter)
                  }
                })
              }
              twoRouter.children.push(threeRouter)
            })
          }
          if (twoElement.lattice) {
            twoElement.lattice.forEach(twoLatticeElement => {
              if (twoLatticeElement.router) {
                const twoLatticeRouter = {
                  path: '/' + oneElement.router + '/' + twoElement.router + '/' + twoLatticeElement.router,
                  name: twoLatticeElement.name,
                  component: Home,
                  children: []
                }
                twoRouter.children.push(twoLatticeRouter)
              }
            })
          }
          oneRouter.children.push(twoRouter)
        }
      })
    }
    if (oneElement.lattice) {
      oneElement.lattice.forEach(oneLatticeElement => {
        if (oneLatticeElement.router) {
          const oneLatticeRouter = {
            path: '/' + oneElement.router + '/' + oneLatticeElement.router,
            name: oneLatticeElement.name,
            component: Home,
            children: []
          }
          oneRouter.children.push(oneLatticeRouter)
        }
      })
    }
    route.push(oneRouter)
  })
  return route
}
console.log("⚠检测 ~ route", routes())
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   // {
//   //   path: '/about',
//   //   name: 'About',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   // }
//   {
//     path: '/One',
//     name: 'One',
//     component: One
//   },
//   {
//     path: '/Two',
//     name: 'Two',
//     component: Two
//   },
//   {
//     path: '/Three',
//     name: 'Three',
//     component: Three
//   },
//   {
//     path: '/Four',
//     name: 'Four',
//     component: Four
//   },
//   {
//     path: '/Five',
//     name: 'Five',
//     component: Five
//   },
//   {
//     path: '/Six',
//     name: 'Six',
//     component: Six
//   },
//   {
//     path: '/Seven',
//     name: 'Seven',
//     component: Seven
//   },
//   {
//     path: '/Detail/:id',
//     name: 'Detail',
//     component: Detail
//   }
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes()
})

export default router
