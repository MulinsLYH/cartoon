import indexq from './index.json'
import multiplerowsAndColumns from './multiplerowsAndColumns.json'
import searchList from './searchList.json'
import classification from './classification.json'


/**
 * @param receive 接受http的参数
 * @param param   传http的参数
 */

    function limitField(receive, param) { // 确认两者参数

        let arr = [];
        for (let item in param) {
            arr.push(item);
        }

        for (let i = 0; i < arr.length; i++) {
            if (!receive.hasOwnProperty(arr[i])) {
                return { code: 100, message: '参数错误' }
            }
            if (!receive[arr[i]]) {
                return { code: 100, message: '参数不能为空' }
            }
            
        }

    }

    let indexApi = function (receive) {
  
        return indexq
    }

    let multiplerowsAndColumnsApi = function (receive) {
  
        return multiplerowsAndColumns
    }

    

    let searchListApi = function (receive) {
        receive =(JSON.parse(receive.body)).params;
        let param = {
            current_page: null,
            page_size: null,
            cartoon:'CURRENT_CARTOON_ID',
            keyword:''
        }
        let ending = limitField(receive, param);
        if (ending) {
            return ending
        }
        searchList.current_page = receive.current_page;
        searchList.page_size = receive.page_size;
        // let magic = searchList; // 错误，来自json的变量，赋值改变了searchList结构
        let magic = {}
        for (let item in searchList) {
            magic[item] = searchList[item];
        }
        magic.list = []
        let electric = receive.current_page*receive.page_size >= searchList.total ? searchList.total : receive.current_page*receive.page_size;
        for(let i = (receive.current_page-1)*receive.page_size; i < electric; i++) {
            magic.list.push(searchList.list[i]);
        }
        return magic
    }
    let classificationApi = function (receive) {
    
        receive =(JSON.parse(receive.body)).params;
        let param = {
            current_page: null,
            page_size: null,
            cartoon:'CURRENT_CARTOON_ID',
            classificationIndex:null,
            newDataIndex:null,
            statusDataIndex:null,
            paymentDataIndex:null,
            nationDataIndex:null
        }
        let ending = limitField(receive, param);
        if (ending) {
            return ending
        }
        classification.current_page = receive.current_page;
        classification.page_size = receive.page_size;
        // let magic = classification; // 错误，来自json的变量，赋值改变了classification结构
        let magic = {}
        for (let item in classification) {
            magic[item] = classification[item];
        }
        magic.list = []
        let electric = receive.current_page*receive.page_size >= classification.total ? classification.total : receive.current_page*receive.page_size;
        for(let i = (receive.current_page-1)*receive.page_size; i < electric; i++) {
            magic.list.push(classification.list[i]);
        }
        return magic
    }
    export default {
        indexApi,
        multiplerowsAndColumnsApi,
        searchListApi,
        classificationApi
    };

