<template>
    <section id="es6">
        
    </section>
</template>

<script>
export default {
    name: 'es6',
    data(){
        return{

        }
    },
    mounted(){
        this.demo9();
    },
    methods: {
        demo1(){
            // 声明与表达
            // let: 1.代码块内有效  2.不能重复声明
            if(true){
                let name = '笑笑';
                // let name = '涵涵';// 重复声明了，报错
                var age = 19;
            }
            console.log('let与var',name,age);//结果: 空、19    let在if代码块有效

            //const 声明一个只读变量,声明后值无法改变
            const PI = "3.1415926";
            // PI = 666;// const值无法改变，报错
            console.log('const',PI);
        },
        demo2(){
            //箭头函数  (参数) => {}  相当于  function (参数) {}        箭头函数里面没有 this 对象，用的this是外层或Window 
            // 简写: res => 'return内容'
            var f = v => v;
            //等价于
            // var f = function(v){
            //     return v;
            // }
            console.log('箭头函数',f(1));

            // 默认参数
            function fn(name,age=17){
                console.log('默认参数',name+","+age);
            }
            fn("Amy");// Amy,17
            fn("Amy",undefined);// Amy,17
            fn("Amy",18);// Amy,18
            fn("Amy","");// Amy,
            fn("Amy",null);// Amy,null

            //不定参数: 表示不确定参数个数
            function fi(...values){
                console.log('不定参数',values);
            }
            fi(1,2);// [1,2]
            fi(1,2,3,4);// [1,2,3,4]
        },
        demo3(){
            // 简写
            const age = 12;
            const name = "Amy";
            const person = {age, name};//等同于const person = {age: age, name: name}
            console.log('属性的简洁表示法',person);

            const people = {
                sayHi(){
                    console.log("方法简写");
                }
            }
            people.sayHi();  //"Hi"
            //等同于
            // const people = {
            //     sayHi:function(){
            //         console.log("Hi");
            //     }
            // }
            // people.sayHi();//"Hi"
        },
        demo4(){
            // 对象的拓展运算符: ...
            let people = {name: "Amy", age: 15};
            let someone = { ...people };
            console.log('拓展运算符...',someone);  //{name: "Amy", age: 15}
            let fugai = { ...people,name: '覆盖'};
            console.log('覆盖前同名属性',fugai);

            let age = {age: 18};
            let name = {name: "乎乎"};
            let person = {...age, ...name};
            console.log('合并两个对象',person);

            let arr1 = [1,2];
            let arr2 = [3,4];
            let heArr = [...arr1,...arr2];
            console.log('合并数组',heArr);
        },
        demo5(){
            // 对象新方法  Object.assign(target, source_1, ···)   参数1: 目标对象、参数2: 源对象、参数3: 源对象    将源对象的所有可枚举属性复制到目标对象中(属于浅拷贝)
            let target = {a: 1};
            let obj2 = {b: 2};
            let obj3 = {c: 3};
            Object.assign(target,obj2,obj3);
            console.log('目标对象',target);//{a: 1, b: 2, c: 3}
            console.log('参数不是对象就转为对象然后返回',Object.assign(3));// {3}
            // console.log(Object.assign(null));// 报错，null 和 undefined 不能转化为对象
            // console.log(Object.assign(undefined));// 报错
            console.log('参数1正常，后undefined，不会报错',Object.assign(1,undefined));//{1}

            // Object.is(value1, value2)  比较两个值是否严格相等，与（===）基本类似，返回true或false
            console.log('1严格相等',Object.is('p','p'));//true
            console.log('2严格相等',Object.is([1],[1]));//false 类型相等，值不相等
        },
        demo6(){
            // Array.of() 将参数中所有值作为元素形成数组
            console.log('形成数组',Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
            // Array.from() 将类数组对象或可迭代对象转化为数组,返回值为转换后的数组
            console.log(Array.from([1, 2])); // [1, 2]
            console.log(Array.from([1, , 3])); // [1, undefined, 3]
            let arr = [1,2,3,4];
            // 数组.find(函数并return内容)  查找符合条件的元素，则返回第一个元素
            // 数组.fill(参数1,参数2);  参数1: 填充的值  参数2: 被填充的起始索引  参数3:被填充的结束索引，默认为数组末尾
            console.log('find查找',arr.find(item => item>2));//3
            console.log('fill填充',arr.fill('填充的值',1,3));//[1, "填充的值", "填充的值", 4]
            console.log('1.数组是否包含指定值',arr.includes(1));// true
            console.log('2.数组是否包含指定值',arr.includes(1,2));// false
        },
        demo7(){
            // map对象: Map 的键可以是任意值,Object 的键只能是字符串或者 Symbols
            var myMap = new Map();

            var keyString = "a string"; 
            myMap.set(keyString, "1");
            console.log('key是字符串',myMap.get(keyString));// 1
            console.log('key是字符串',myMap.get("a string"));// 1    因为 keyString === 'a string'
                
            var keyObj = {};
            myMap.set(keyObj, "2");
            console.log('key是对象',myMap.get(keyObj));// 2
            console.log('key是对象',myMap.get({}));// undefined, 因为 keyObj !== {}

            var keyFunc = function () {}; // 函数
            myMap.set(keyFunc, "3");
            console.log('key是函数',myMap.get(keyFunc));// 3
            console.log('key是函数',myMap.get(function() {}));// undefined, 因为 keyFunc !== function () {}

            myMap.set(NaN, "not a number");
            console.log('key是NaN',myMap.get(NaN));// "not a number"
            var otherNaN = Number("foo");
            console.log('key是NaN',myMap.get(otherNaN));// "not a number"

            //map遍历
            var list = new Map();
            list.set(0, "zero");
            list.set(1, "one");
            for (let [key, value] of list) {
                console.log(key + " = " + value);
            }
            list.forEach(function(value, key) {
                console.log(key + " = " + value);
            });

            var kvArray = [["key1", "value1"], ["key2", "value2"]];
            var myMap = new Map(kvArray);
            console.log('array转map',myMap);// 数组得规定以上写法
            var outArray = Array.from(myMap);
            console.log('map转array',outArray);

            var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
            var second = new Map([[1, '111'], [2, '222']]);
            // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的
            var merged = new Map([...first, ...second]);
            console.log('map合并',merged);// {1: '111',2: '222',3: 'three'}
        },
        demo8(){
            // set对象: 用来存储任何类型的唯一值
            // +0 与 -0恒等不重复、undefined 与 undefined恒等不重复、NaN 与 NaN不恒等不重复
            let mySet = new Set();
            mySet.add(5);
            mySet.add(5); // 值的唯一性
            mySet.add("some text"); // 类型的多样性
            var o = {a: 1, b: 2};
            mySet.add(o);
            mySet.add({a: 1, b: 2}); // 引用对象不同不恒等，即使值相同，Set 也能存储
            console.log('set',mySet);// {5, "some text", {…}, {…}}

            var setList = new Set(["value1", "value2", "value3","value2"]);
            console.log('array转set',setList);
            console.log('set转array',[...setList]);// 有数组去重效果

            var a = new Set([1, 2, 3]);
            var b = new Set([4, 3, 2]);
            var union = new Set([...a, ...b]);
            console.log('合并set',union);// {1, 2, 3, 4}
            var intersect = new Set([...a].filter(x => b.has(x)));// Set.has(x) 判断set 是否含有 x，有返回 true，没有返回 false
            console.log('交集',intersect);// {2,3}
        },
        demo9(){
            // class 的本质是 function
            // 匿名类
            let Example = class {
                constructor(a) {
                    this.a = a;
                    console.log('99ii')
                }
            }
            console.log('匿名类',Example);
            // 命名类
            class means{
                constructor(money,age) {// constructor 方法是类的默认方法，类的实例化对象时被调用
                    // super();
                    this.money = money;
                    this.age = age;
                    console.log('调用',this);
                }
                get money(){// getter函数随this.a变化而变化
                    console.log('getter');
                    return this._money;
                }
                set money(value){
                    console.log('setter');
                    this._money = value;
                }
                sum(){// setter函数
                    return this.money;
                }
                static bloom(){// 静态方法
                    return 1000;
                }

            }
            console.log('默认name属性',means.name);
            let surprised = new means(12,15);// 类的实例化,先调用setting方法，再调用constructor方法     surprised.__proto__ === means.prototype并且means.prototype.constructor === surprised.constructor === means
            console.log('类的实例化',surprised);// 返回this对象
            console.log('调用隐式原型(__proto__)里的方法',surprised.sum());

            // 类的继承
            class Father {
                test(){
                    return '01111';
                }
                static test1(){
                    return '02222';
                }
            }
            class Child extends Father {
                constructor(fan) {
                    super();// 必须有super,且要在this前
                    this.fan = fan;
                    console.log('调用父类方法',super.test());
                    console.log('类的继承',this);
                }
                static test3(){
                    return super.test1();
                }
            }
            console.log('调用静态方法',Child.test3());
            let intellect = new Child(98);     
        }
    }
}
</script>

<style lang="less" scoped>
#es6{
    
}
</style>

