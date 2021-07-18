import Mock from 'mockjs' // npm install mockjs --save
// import domain from '../../src/config/domain'//

/**
 * 接受所以暴露export default
 * import * as obj from './'
 */
import loginAPI from './user/login'
import indexAPI from './index/index'

import shopAPI from './shop/shop'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})
//    url:      /\/user\/login/    指的是  /user/login
//    请求方式:    /get|post/i    指的是get和post请求都可以


/**
 * 登录
 * @param { username: '', password: '' }
 */
Mock.mock("/auth/login", "post", loginAPI.loginApi);

/**
 * 查询最近在看
 */
 Mock.mock( "/cartoon_pic_media", "get", indexAPI.indexApi);
/**
 * 
 * /**
 * 多行多列展示
 */
 Mock.mock( "/multiplerows_and_columns", "get", indexAPI.multiplerowsAndColumnsApi);

 /**
 * 
 * /**
 * 查询多行多列
 */
 
  Mock.mock( "/search_list", "post", indexAPI.searchListApi);
 /**
 * 
 * /**
 * 分类
 */
 
  Mock.mock( "/classification_list", "post", indexAPI.classificationApi);
  
 /**
  * 
 * 查询该全部数据
 * @param { store_id: 12, current_page: 1, page_size: 10 } 店铺id
 */
 Mock.mock( "/store/goods-list", "post", shopAPI.purchase);



/**
 * 无需暴露，main.js加载加载过mock就行
 * export default Mock;
 */
