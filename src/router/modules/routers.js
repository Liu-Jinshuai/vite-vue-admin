/**
 * @param {String} meta.name 路由名称
 * @param {String} meta.icon 路由图标
 * @param {Boolean} meta.isExpanded 是否展开
 * @param {Boolean} meta.cache 是否缓存
 */

export default [{
    path: '/',
    meta: {
        name: 'home',
        icon: 'el-icon-s-home',
    },
    component: () => import('@/views/home/HomeValue.vue')
}, {
    path: '/user',
    meta: {
        name: 'user',
        isExpanded: false
    },
    children: [
        {
            path: '/user/info',
            meta: {
                name: 'user-info'
            },
            component: () => import('@/views/user/UserInfo.vue')
        }
    ]
}]