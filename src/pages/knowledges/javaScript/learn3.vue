<template>
    <section></section>
</template>

<script>
export default {
    name: "learn3",
    data(){
        return{

        }
    },
    created () {
        // this.cause('传入参数').then(function(res){ // 可以省略then,catch
        //     console.log('最终步骤', res)
        // }).catch(err => {
        //     console.log('error',err);//语法错误会触发catch方法
        // })
    },
    mounted(){
        // this.demo2();
        // this.init('参数1', '参数2', function(res){
        //     console.log('最终执行', res);
        // })
    },
    methods: {
        init (params1, params2, callback) { // 方法callback的应用
            console.log('传入的参数:', params1, params2);
            callback({ message: '成功' }); // callback有return功能，结束方法
        },
        demo1(){
            console.log( "1" );// 同步任务
            setTimeout(function() {// setTimeout和setInterval函数，是异步-宏任务
                console.log( "2" )
            }, 0 );//延迟时间为0
            setTimeout(function() {// 异步-宏任务
                console.log( "3" )
            }, 0 );

            // 应用: 现在是定义给变量，还可以在方法里return给方法, 就可以then了
            var promise = new Promise(function(resolve) {// new Promise是同步任务
                console.log('4')
                resolve()
            });
            promise.then(function() {// promise.then是异步-微任务
                console.log('5')
            });// promise是异步解决方案，要想两个方法顺序执行，就用promise

            console.log( "6" );// 同步任务
            //执行顺序: 1、4、6、5、2、3

            /* javascript是一门“单线程”的语言，所以javascript就像一条流水线，不能同时进行多个任务和流程
            同步任务: 在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。（主线程就是执行栈）
            异步任务: 先进入"任务队列"，等待主线程任务执行完毕，"任务队列"才进入主线程，开始执行

            异步任务: 分为宏任务和微任务,只有微任务执行完毕，才执行宏任务
            简单理解: 先同步，再异步(先微任务，再宏任务)     请记能异步的js */
        },
        demo2(){
            // 异步编程: 是的顺序步骤执行（promise和async属于es6）
            // Promise多用于在方法return new Promise.....然后调用该方法时，方法名(传参).then回调函数
            function is_promise(value) {
                return new Promise(resolve => {
                    console.log('new Promise是同步任务',value);
                    resolve();
                })
            }
            is_promise('bingo').then(() =>{
                console.log('promise.then是异步-微任务');
            })

            // 多个顺序步骤，promise就不太好使了,优化用async/await
            function step1(key) {
                console.log('步骤1',key);
                return 222;
            }
            function step2(key) {
                console.log('步骤2',key);
            }
            function step3(key) {
                console.log('步骤3',key);
            }
            async function myAsync(params) {
                const a = await step1(params);// 第一个await是同步任务，以下都是异步-微任务
                await step2(a);// a是方法return返回的参数
                await step3(333);
                return {message: '回调成功'};
            }
            myAsync('传参!').then(result => {
                console.log('步骤4-结果',result);
            }).catch(err => {
                console.log('error',err);//语法错误会触发catch方法
            })
        },
        // vue应用async
        async cause (params) {// 应用接口的执行步骤: 如先获取id，再用该id传别的接口   http请求就是用这个封装的
            let guide = await this.cause1(params);
            await this.cause2(guide);// 步骤1获取的id，传给步骤2
            await this.cause3()
            console.log('await-4')
            return {message: '回调成功'};
        },
        cause1 (params) {
            console.log('await-1', params)
            return { id: 910 }
        },
        cause2 (val) {
            if (val.id === 910) {
                console.log('await-2')
            }
        },
        cause3 () {
            console.log('await-3')
        },
        demo3(){
            // 遍历: for与forEach的区别:
            // forEach不能使用break,continue,不能用arr.splice(),索引index不会被重置,相反for可以
            let arr = [1,2,3];
            for(let i=0;i<arr.length;i++){//能使用break,continue

            }

            let obj = {aaa: 102};
            arr.forEach(function(item,index,arr){//参数分别是:数组元素,索引,数组自身
                console.log('this',this.aaa);
            },obj);// this指向obj

            // 遍历: 数组.map: 返回新的数组（可以用return）
            let newArr = arr.map(function(num){
                return num*2;
            })
            console.log('新数组',newArr);

            // 遍历: 数组.filter: 返回符合条件的新数组
            let newArr2 = arr.filter(function(item){
                return item>1&&item<3;
            })
            console.log('filter',newArr2);

            // 遍历: 数组.some: 检测数组中的元素是否满足指定条件,返回true,false
            let active = arr.some(function(item,index,arr){
                return item == 1;
            })
            console.log('some',active);

            // 遍历: 数组.find()  查找符合条件的元素，则返回第一个元素
            let content = arr.find(function(item){
                return item>0;
            })
            console.log('find',content);
        },
        demo4(){
            // 保留两个小数点
            let money = 75995094.5789;
            console.log('保留两个小数点',Number(money.toFixed(2)));// toFixed(num) 指定小数位数（四舍五入，返回的是字符串）
            console.log('保留两个小数点',parseInt(money*100)/100);
        },
        demo5(){
            //递归: 函数直接或间接调用自己
            // 阶乘
            function fact(num) {
                if (num <= 1) {// 防止死循环
                    return 1;
                } else {
                    return num * fact(num - 1);// 运算 3*2*fact(1)
                }
            }
            console.log('3*2*1',fact(3));// 结果为 6 
        },
        demo6(){
            // 递归2
            let list = [{
                "thisNode": "10000480",
                "prientNode": "",
                "qx": "0",
                "children": [
                {
                    "prientNode": "10000480",
                    "thisNode": "10000470",
                    "qx": "0",
                    "children": []
                },
                {
                    "prientNode": "10000480",
                    "thisNode": "10000420",
                    "children": [
                        {
                            "prientNode": "10000420",
                            "thisNode": "10000551",
                            "qx": "1",
                            "children": [
                            {
                                "prientNode": "10000420",
                                "thisNode": "10000551",
                                "qx": "1",
                                "children": []
                            }
                            ]
                        }
                    ]
                }
                ]
            }
            ];

            // 查找qx为1的节点,并返回该children
            function findChildren(arr, key, value,callback) {// callback是回调函数
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i][key] == value){
                        callback(arr[i].children);
                    }
                    findChildren(arr[i].children, key, value, callback);// 传children数组
                }
            }
            findChildren(list, 'qx', '1', function (children) {
                console.log(children);
            });           
        }
    }
}
</script>

<style lang="less" scoped>

</style>