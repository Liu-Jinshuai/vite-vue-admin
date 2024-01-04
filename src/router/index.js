import { createRouter, createWebHashHistory } from 'vue-router'
import routers from './modules/routers'
import fullScreen from './modules/fullScreen'
const routes = [...routers, ...fullScreen]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(()=>{
    // ...
})
router.afterEach(()=>{
    // ...
})
export default router