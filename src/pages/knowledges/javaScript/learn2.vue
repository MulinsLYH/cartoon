<template>
    <section>
        <!-- <img class="fish" style="width: 120px;height: 120px;zoom: 100%" src="../../../../static/picture/login/fish.png" title="这是图片" alt="哎呀，图片加载失败"/> -->
        <div id="box" style="width: 100%;height: 50px;background: blue;">
			<p id="pp" style="width: 100px;height: 50px;background: yellow;margin: 0 auto;">子元素范围</p>
		</div>
    </section>
</template>

<script>
export default {
    name: "learn2",
    data(){
        return{

        }
    },
    mounted(){
        this.demo7();
    },
    methods: {
        demo1(){
            // 函数概念：函数是执行某种特定功能的代码段，一次编写可以重复调用
            // 定义函数：function 函数名(){代码段}       
            function fn(value){
            // 形参：在函数定义时，传的参数是一个虚拟的变量
            // 实参：当函数被调用时,传的参数是一个实际的值
            }
            fn(5);//调用函数

            var yaya =  function(){
                return {message: '成功状态'};// return;    函数的返回结果,直接结束该函数
            }
            console.log('调用函数return',yaya());//注意yaya是个函数

            //在对象里定义函数
            let yu = {
                age: 16,
                ant: function(){

                }
            }
            yu.ant();//调用函数

            // 匿名函数:没有命名的函数，减少全局变量的使用，性能得到优化
            (function(){
                console.log('已调用的匿名函数');
            })();

            function student(name,age){
                this.name = name;
                this.age = age;
            }
            student.prototype.getName = function(){
                console.log('构造函数',this.name);//娜娜     在构造函数中，this指向构造函数new出来的对象
            }
            var rice = new student("娜娜",18);//构造函数
            rice.getName();//调用函数
        },
        demo2(){
            /* 键盘事件
            onkeydown  按下键盘触发事件
            keyCode  键盘码，键盘上每个按键对应一个码,通过event参数来调用
            onkeyup  键盘抬起事件

            event{
                ctrlKey: Ctrl键按下true，抬起false
                shiftKey: shift键按下true，抬起false
                altKey: alt键按下true，抬起false
            }	 */
            document.onkeydown = function(event){
                // 用||或，前面值没有，就取后面的值
                var ev = event || window.event;//event  谷歌、火狐等，浏览器内置参数      window.event  IE浏览器内置参数    这是兼容性写法
                if(ev.ctrlKey){
                    console.log('你按下了Ctrl键');
                }
            }
            // 鼠标事件
            // onmousemove 鼠标移动事件
            // onmousewheel  鼠标滚轮事件
            // document.onmousemove = function(event){
            //     var ev = event||window.event;
            //     console.log('纵横坐标',ev.clientX+" "+ev.clientY);//ev.clientX 横坐标   ev.clientY:纵坐标    默认从左上角开始
            // }
            let fishImg = document.getElementsByClassName("fish")[0];
            fishImg.onmousewheel = function(event){//滚轮放大缩小图片
                var ev = event||window.event;//兼容性处理
                ev.preventDefault();//阻止浏览器默认动作,滚动条就不会下滑了
                //event.wheelDelta:该属性返回-120或者120
                if(ev.wheelDelta==120){//滚轮向上滚动

                }else if(ev.wheelDelta==-120){//滚轮向下滚轮

                }
                //样式   zoom: 100%;  等于100%是原图、大于100%是放大、小于100%是缩小
                var zoom = parseInt(this.style.zoom);//获取zoom样式值
                var delta = event.wheelDelta/12;//不是10就是-10
                zoom += delta;
                if(zoom>0){
                    this.style.zoom = zoom + "%";
                }
            }
        },
        demo3(){
            // 定时器
            // 时间：以毫秒为单位，1000毫秒=1秒
            // 一次性定时器：到时间后只执行一次，不再执行
            // setTimeout(回调函数,时间);
            function fn(){
                console.log('timer');
            }
            // let timer = setTimeout("fn()",1000);
            let timer = setTimeout(fn,1000);
            // let timer = setTimeout(function(){},1000);
            // clearTimeout(timer);//清除一次性定时器

            // 间隔性定时器：setInterval(回调函数，时间)
            // let timer = setInterval("fn()",1000);
            // let timer = setInterval(fn,1000);
            // let timer = setInterval(function(){},1000);
            // clearInterval(timer);//清除间隔性定时器
        },
        demo4(){
            /* 闭包：函数内部再次定义函数，内部函数可以调用外部函数的局部变量,但是外部函数无法调用内部函数的变量
            闭包的优势：1.内部函数可以调用外部函数的局部变量; 2.闭包使变量一直保存在内存中，而不是在函数执行完毕时被回收
            闭包的劣势：每次将变量保存在内存中，占用内存 */
            function fn1(){
            	var a=1;
            	function fn2(){
            		console.log(a);//获取函数外定义a
            	}
            	return fn2;//此时fn2是指针
            }
            fn1()();
            //或者
            function fr1(){
            	var a=2;
            	function fr2(){
            		console.log(a);
            	}
            	return fr2();//此时fr2不是指针
            }
            fr1();
            //或者
            (function(){
            	var a=3;
            	function fi2(){
            		console.log(a);
                }
            	return fi2();
            })()
        },
        demo5(){
            /* 面向对象：以事务为中心的编程思想
            面向对象的三种特性：
            	1.继承：通过继承，子类可以访问父类的属性和方法
            	2.多态：同一个方法,不同的类,实现不同的功能
            	3.封装：将实体代码封装起来，对外部不可见，外部只能直接访问封装后的属性或方法
            	降低程序代码的耦合度
            原型链属性prototype:声明一个函数时，js会自动为其创建一个原型链属性prototype
            使该函数有能力去自行定义方法和属性 */

            function A(){
                this.age = 18;
            };//构造函数A
            function B(){
                this.name = 'B';
            };//构造函数B

            A.prototype.speak = function(){
                
            }
            A.prototype.callEat = function(){
                console.log('A',this.age);
            }
            A.prototype.sex = "女";

            B.prototype.flower = function(){
                console.log('丢失')
            }
            B.prototype = new A();//此时B继承A的所有属性和方法,自己的prototype就会丢失
            //创建B的实例对象B
            var B = new B();
            B.callEat();
            console.log('继承属性',B);
        },
        demo6(){
            //事件冒泡：事件从子元素传递到父元素(从内向外传递),浏览器默认的事件传递方式（父子元素都绑定了事件）
            let box = document.getElementById("box");
            let pp = document.getElementById("pp");
            box.onclick = function(event){
                console.log('父元素事件')
            }
            pp.onclick = function(event){
                var ev = event||window.event;
                ev.stopPropagation();//阻止冒泡（不加这个，父元素事件也会触发）
                console.log('子元素事件');
            }
            //事件捕获：事件从父元素传递到子元素(从外向内传递)（父子元素都绑定了事件）
            // 事件监听
            //1.不兼容IE浏览器
            // box.addEventListener('click',function(event){//参数1：事件类型(去掉on)  参数2：回调函数  参数3：用来指定该事件为事件冒泡还是事件捕获,默认false事件冒泡，true事件捕获
            //     var ev = event||window.event;
            //     console.log('事件监听');
            // },false);
            // function move(){}
            // document.removeEventListener('mousemove',move);//移除事件监听       参数1：事件类型(去on掉)  参数2：移除的事件函数功能

            // 2.兼容IE浏览器
            // attachEvent();//添加监听
            // detachEvent(参数1,参数2)//移除事件监听

            //事件委托：利用事件冒泡的原理，将子元素的事件委托给父元素或者祖先元素来执行
            // 事件源：触发事件的当前对象，需要通过父元素查找该事件源
            // box.addEventListener('click',function(event){
            //     var ev = event||window.event;
            //     var target = ev.target || ev.srcElement;//事件源对象(兼容IE)
            //     let is_label = target.nodeName.toLowerCase();
            //     console.log('点子元素啊',is_label);
            //     if(is_label == "p"){//点击就指定了该p标签上颜色，li标签的事件委托给了父元素
            //         target.style.background = "red";
            //     }
            // },false);
        },
        demo7(){
        /*   this：指针，虚拟的替代品，谁调用，this就指向谁

            var name = "夏兰";
            console.log(this.name);//夏兰，说明this是全局对象window
            
            function fn(){
                console.log(this.name);//夏兰   1. 在普通函数中，this指向全局对象window
            }
            fn()

			var obj = {
				name:"星星",
				eat:function(){
					console.log(this.name);//星星     2. 在对象方法中，this指向当前对象
				}
            }
            obj.eat();

            function student(name,age){
				this.name = name;
				this.age = age;
            }
            student.prototype.getName = function(){
				console.log(this.name);//娜娜     3. 在构造函数中，this指向构造函数new出来的对象
            }
            var rice = new student("娜娜",18);
            rice.getName();

            setInterval(function () {
                console.log(this); // 4. 在定时器中,this指向全局对象window
            }, 1000); 

            以上这个在方法内，this不是全局了，this无效，看看就好
        */




            //4种更改this指向
            // apply()与call()非常相似,区别是传参方式不同,apply()参数2必须数组
            var person = {
                name: "zhangsan",
                age: 19
            }
            function aa(x,y){
                console.log(x+'方法里的this', this);
            }
            aa(1,2);//此时,this指向window
            // 在方法后加
            aa.call(person,'call改',5);//此时，方法里this指向person
            aa.apply(person, ['apply改', 5]);//此时，方法里this指向person
            aa.bind(person,'bind改',5)();//此时，方法里this指向person
            // 存储this指向到变量中
            // let that = this;
            // setInterval(function () {
            //     console.log(that);//存储的this
            //     console.log(this); // 在定时器中,this指向全局对象window
            // }, 1000);
        }
    }
}

</script>

<style lang="less" scoped>

</style>