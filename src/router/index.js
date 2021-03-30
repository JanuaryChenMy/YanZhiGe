import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Boxs from '../views/Boxs.vue'
// import Two from '../views/2.vue'
// import Three from '../views/3.vue'
// import Four from '../views/4.vue'
// import Five from '../views/5.vue'
// import Six from '../views/6.vue'
// import Seven from '../views/7.vue'
import Detail from '../views/Detail.vue'
import MenuRouter from '../assets/jsData/MenuRouter'
import MenuList from '../views/MenuList.vue'
import Layout from '../views/Layout.vue'
const MenuRouterList = MenuRouter.menuList
const routes = () => {
  const route = [{
    path: '/',
    name: 'Home',
    component: Home
  }]
  MenuRouterList.forEach(oneElement => {
    const oneRouter = {
      path: '/' + oneElement.router,
      name: oneElement.name,
      component: Layout,
      children: []
    }
    if (oneElement.list) {
      oneElement.list.forEach(twoElement => {
        if (oneElement.router) {
          const twoRouter = {
            path: '/' + oneElement.router + '/' + twoElement.router,
            name: twoElement.name,
            component: Layout,
            children: []
          }
          if (twoElement.list) {
            twoElement.list.forEach(threeElement => {
              const threeRouter = {
                path: '/' + oneElement.router + '/' + twoElement.router + '/' + threeElement.router,
                name: threeElement.name,
                component: Layout,
                children: []
              }
              if (threeElement.lattice) {
                threeElement.lattice.forEach(ThreeLatticeElement => {
                  if (ThreeLatticeElement.router) {
                    const threeLatticeRouter = {
                      path: '/' + oneElement.router + '/' + twoElement.router + '/' + threeElement.router + '/' + ThreeLatticeElement.router,
                      name: ThreeLatticeElement.name,
                      component: MenuList,
                      children: []
                    }
                    // 跳转九宫格页
                    threeRouter.children.push(threeLatticeRouter)
                  }
                })
                threeRouter.component = Boxs
                threeRouter.props = {
                  latticeList: threeElement.lattice
                }
              } else {
                // 跳转列表页
                threeRouter.component = MenuList
              }
              twoRouter.children.push(threeRouter)
            })
          } else if (twoElement.lattice) {
            twoElement.lattice.forEach(twoLatticeElement => {
              if (twoLatticeElement.router) {
                const twoLatticeRouter = {
                  path: '/' + oneElement.router + '/' + twoElement.router + '/' + twoLatticeElement.router,
                  name: twoLatticeElement.name,
                  component: MenuList,
                  children: []
                }
                // 跳转九宫格页
                twoRouter.children.push(twoLatticeRouter)
              }
            })
            twoRouter.component = Boxs
            twoRouter.props = {
              latticeList: twoElement.lattice
            }
          } else {
            // 跳转列表页
            twoRouter.component = MenuList
          }
          oneRouter.children.push(twoRouter)
        }
      })
    } else if (oneElement.lattice) {
      oneElement.lattice.forEach(oneLatticeElement => {
        if (oneLatticeElement.router) {
          // console.log(oneLatticeElement, '/' + oneElement.router + '/' + oneLatticeElement.router)
          const oneLatticeRouter = {
            path: '/' + oneElement.router + '/' + oneLatticeElement.router,
            name: oneLatticeElement.name,
            component: MenuList,
            children: []
          }
          // 跳转九宫格页
          // oneRouter.component = MenuList
          oneRouter.children.push(oneLatticeRouter)
        }
      })
      oneRouter.component = Boxs
      oneRouter.props = {
        latticeList: oneElement.lattice
      }
    } else {
      // 跳转列表页
      oneRouter.component = MenuList
    }
    route.push(oneRouter)
  })
  return route
}
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
