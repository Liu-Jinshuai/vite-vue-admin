import { serviceForDomainB } from '@/utils/request'

export function login(data) {
    return serviceForDomainB({
        url: '/login',
        method: 'get',
        data
    })
}