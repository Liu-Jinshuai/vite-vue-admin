import { serviceForDomainA } from '@/utils/request'

export function getShopList(params) {
    return serviceForDomainA({
        url: '/shoplist',
        method: 'get',
        params
    })
}