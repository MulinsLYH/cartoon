import allKey from '../../static/capital/allKey.json'

let domain
if (process.env.NODE_ENV === 'development') { // 开发环境
    if (allKey['key']) {
        domain = allKey['mock-url']
    } else {
        domain = allKey['dev-url']
    }
} else if (process.env.NODE_ENV === 'production') { // 生产环境
    if (location.hostname === 'pricemap.mideazy.com') {
        /**
         * 测试环境：用域名作判断
         * https://pricemap.mideazy.com
         */
        domain = allKey['prod-url-test']
    } else {
        /**
         * 线上环境
         */
        domain = allKey['prod-url-ok']
    }
    // domain = location.protocol + '//' + window.location.host;
}  
export default domain;