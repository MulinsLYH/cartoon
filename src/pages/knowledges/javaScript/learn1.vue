<template>
    <section>
        <div id="box" class="category" name="coffee" style="color: white;">
            <p class="meet">看看了解</p>
            <p class="bread">简介</p>
            <p class="poetry">好诗</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'dataType',
    data(){
        return{

        }
    },
    mounted(){//可以dom操作
        this.demo1();
    },
    methods: {
        demo1(){
            // javascript脚本语言组成结构:语法标准,DOM文档对象模型,BOM浏览器对象模型
            //四种输出类型
            alert('alert内容');//弹出框
            prompt("prompt内容");//对话框
            // document.write("内容");//页面中打印内容，不推荐,覆盖掉原网页内容
            console.log('控制台','变量');
            
            // 注意:1.js不区分单双引号,但是双引号不能包双引号，单引号不能包单引号
            let imgName = "flower";
            let src = "../img/" + imgName + ".png";
            let src2 = `../img/${imgName}.png`
            console.log('两种变量与字符串拼接写法', src, src2);

            /* 事件
			1.onload:用户打开页面执行该事件，放在body内部
			2.onchange：当表单内容发生改变时触发该事件,div,p等非表单元素没有改属性
			3.onfocus：表单获取焦点事件
			4.onblur：表单失去焦点事件
			5.onmouseover：鼠标悬浮事件
			6.onmouseout: 鼠标离开事件
			7.onmousedown：鼠标按下时触发该事件
			8.onmouseup：鼠标抬起事件
			9.onclick：鼠标点击完毕事件
            10.ondblclick：双击事件
            移动端事件
            ontouchstart
            ontouchmove
            ontouchend

            在某情况会去掉on，或用@代替on

            html中的节点类型：
			1.元素节点：html、div、p、span等这些元素
			2.属性节点：src、href、type、id等
			3.文本节点：指标签的内容,js会默认把空格当成空白节点
            4.注释节点：html中的注释
            */
        },
        demo2(){
            //DOM文档对象模型
            //六种获取元素节点
            let yuansu = document.getElementById("box");//通过id名获取元素,id名可以直接使用
            // let yuansu = document.getElementsByClassName("category")[0];//通过class名来获取元素
            // let yuansu = document.getElementsByTagName("div")[0];//通过标签名来获取元素
            // let yuansu = document.getElementsByName("coffee")[0];//通过name属性来获取元素
            // let yuansu = document.querySelector("#box");//获取匹配选择器元素的第一个
            // let p800 = document.querySelectorAll('p')[1];//通过选择器获取所有匹配的元素
            yuansu.style.backgroundColor = "red";//backgroundColor  注意大写
            // console.log('获取元素',yuansu);
            // console.log('1元素',yuansu.innerHTML);
            // console.log('2元素',yuansu.id);
            // console.log('3元素',yuansu.style.color);
            // console.log('4元素',yuansu.className);
            // console.log('5元素',yuansu.value);//input标签的value属性
            // console.log('6元素',yuansu.length);
            // console.log('7元素',yuansu.checked);//checked属性来自<input type="checkbox" name="a" />

            // 节点操作
            let is_span = document.createElement("span");//创建元素：document.createElement("标签名")
            let text = document.createTextNode("文本内容");//创建文本：document.createTextNode("内容");
            console.log('创建文本',text);
            is_span.id = "fresh";
            is_span.innerHTML = "这是创建的元素节点";
            is_span.appendChild(text);
            yuansu.appendChild(is_span);//添加子节点： 父元素名.appendChild(子元素名)
            let meet = document.getElementsByClassName("meet")[0];
            yuansu.removeChild(meet);//移除子节点： 父元素名.removeChild(子元素名)   默认每次删除第一个
            console.log('nodeType',yuansu.nodeType);// 元素名.nodeType     元素节点返回1、属性节点返回2、文本节点返回3(空格也是)
            console.log('nodeName',yuansu.nodeName);// 元素名.nodeName     元素返回元素名称、属性返回属性名称、文本返回#text
            console.log('nodeValue',yuansu.nodeValue);// 元素名.nodeValue  获取文本节点的内容   元素返回null、属性返回属性值、文本返回文本内容
            let attr = yuansu.attributes;
            console.log('attributes',attr);// 元素名.attributes   获取元素的所有属性
            console.log('attributes',attr[1].nodeValue);
            console.log('getAttribute',yuansu.getAttribute('name'));//元素名.getAttribute(属性名)    获取指定属性
            yuansu.setAttribute('name','juice');//元素名.setAttribute('属性名','属性值')     修改指定属性

            let is_p = document.createElement("p");
            is_p.innerHTML = '嘿嘿嘿';
            let bread = document.getElementsByClassName("bread")[0];
            yuansu.insertBefore(is_p,bread);//父元素名.insertBefore('新元素','指定元素')   在指定的子节点前插入节点

            let p600 = document.createElement("p");
            p600.innerHTML = '替换子节点';
            let poetry = document.getElementsByClassName("poetry")[0];
            yuansu.replaceChild(p600,poetry);//父元素名.replaceChild('新元素','指定元素')    用新的子节点替换旧的子节点
            
            //包空格    不推荐记
            // console.log('获取直属父节点',yuansu.parentNode);//子元素名.parentNode
            // console.log('获取节点的所有子节点(包空格)',yuansu.childNodes);//父元素名.childNodes
            // console.log('获取元素的所有子节点(不包空格)',yuansu.children);//父元素名.children

            // console.log('获取下一个兄弟节点(包空格)',bread.nextSibling);//子元素名.nextSibling
            // console.log('获取下一个兄弟节点(不包空格)',bread.nextElementSibling);//子元素名.nextElementSibling

            // console.log('获取前一个兄弟节点(包空格)',bread.previousSibling);//子元素名.previousSibling
            // console.log('获取前一个兄弟节点(不包空格)',bread.previousElementSibling);//子元素名.previousElementSibling

            // console.log('获取第一个子节点(包空格)',yuansu.firstChild);//父元素名.firstChild
            // console.log('获取第一个子节点(不包空格)',yuansu.firstElementChild);//父元素名.firstElementChild

            // console.log('获取最后一个子节点(包空格)',yuansu.lastChild);//父元素名.lastChild
            // console.log('获取最后一个子节点(不包空格)',yuansu.lastElementChild);//父元素名.lastElementChild

            // console.log('获取第一个定位的元素(就近原则)',bread.offsetparent);//子元素名.offsetparent
            console.log('获取元素的宽度(width+border+padding)',yuansu.offsetWidth);//元素.offsetWidth
            console.log('获取元素的高度(height+border+padding)',yuansu.offsetHeight);//元素.offsetHeight
            console.log('获取定位元素到父元素左边距离(left+marginLeft)',yuansu.offsetLeft);//元素.offsetLeft
            console.log('获取定位元素到父元素上边距离(top+marginTop)',yuansu.offsetTop);//元素.offsetTop
        },
        demo3(){
            //BOM    浏览器对象模型
            // 全局对象window: 创建的全局变量以及全局函数都是window的成员变量，document也是window的属性之一
            console.log('浏览器窗口的内部宽度(包括滚动条)',window.innerWidth);
            console.log('浏览器窗口内部高度(包括滚动条)',window.innerHeight);
            console.log('浏览器窗口的内部宽度(不包括滚动条)',document.documentElement.clientWidth);
            console.log('浏览器窗口的内部高度(不包括滚动条)',document.documentElement.clientHeight);

            console.log('1滚动条距离浏览器最顶部的高度',document.documentElement.scrollTop);//兼容IE浏览器
            console.log('2滚动条距离浏览器最顶部的高度',document.body.scrollTop);//兼容谷歌,Safari
            console.log('3滚动条距离浏览器最顶部的高度',window.pageYoffset);//兼容谷歌,Safari
            let winScrollTop = document.body.scrollTop||window.pageYoffset||document.documentElement.scrollTop
            console.log('兼容浏览器写法',winScrollTop);

            // window.onscroll = function (e) {}   滚动条滚动事件
            // window.onmessage = function (e) {}   全局消息事件
            // window.scrollTo(0,400);//将浏览器滚动到指定的x和y坐标
            // window.scrollBy(0,400);//滚动增加x或者y的值
            // window.addEventListener('scroll',function(){     //监听滚动的方法
            // })
            //window.open("http://www.jd.com");//打开新的浏览器窗口  等于window.open("http://www.jd.com","_blank")
            //window.open("http://www.jd.com","_self");替换当前页面
            // moveTo(x,y)将新的浏览器窗口初始化到指定坐标
            // window.close()    关闭窗口
            
            // window.location:获取浏览器URL信息(window可省略)
            console.log('URL的完整路径',location.href);// http://localhost:9090/root/mcenter/learn1?id=128  用于跳转 location.href = "http://www.jd.com";
            console.log('URL的文件路径',location.pathname);// /root/mcenter/learn1
            console.log('主机域名',location.hostname);// localhost
            console.log('URL中的端口号',location.port);// 9090
            console.log('主机域名和端口号',location.host);// localhost:9090
            console.log('web协议(一般为http或者https，加s的安全性比较高)',location.protocol);// http:
            console.log('截取URL中？后面的字符串',location.search);// ?id=128
            // location.assign("http://www.jd.com");//加载或者跳转
            // location.replace("http://www.jd.com");//加载或者跳转,跳转后无法退回到原网页
            // location.reload();重定向网页,刷新

            // window.navigator:获取浏览器本身的信息
            console.log('浏览器的名称',navigator.appName);
            console.log('浏览器的版本号',navigator.appVersion);
            console.log('用户代理，可以获取浏览器类别、版本，客户端操作系统等信息',navigator.userAgent);
            console.log('浏览器运作的平台',navigator.platform);
            console.log('浏览器代码',navigator.appCodeName);

            console.log('1浏览器使用的语言',navigator.language);//不兼容IE8以下版本
            console.log('2浏览器使用的语言',navigator.userLanguage);//兼容IE8以下版本，不兼容Chrome等
            console.log('3浏览器使用的语言',navigator.systemLanguage);//兼容IE8以下版本，不兼容Chrome等
            let lang = navigator.language || navigator.userLanguage || navigator.systemLanguage;
            console.log('兼容浏览器写法',lang);

            // window.history: 获取用户在一定时间段的历史记录
            // history.back():返回上一页
			// history.forward():返回下一页
            // history.go(num): 跳转到第几页，num=-1等价于back(),num=1等价于forward()
            
            // window.screen：获取屏幕信息
            // screen.availWidth   获取屏幕可用的宽度
			// screen.availHeight   获取屏幕可用的高度
			// screen.colorDepth   获取屏幕色彩深度，一般用在图像处理算法中，一般返回24
			// screen.pixelDepth   获取屏幕色彩分辨率，值等价于色彩深度(不兼容谷歌)
			// screen.width   获取屏幕分辨率的宽
			// screen.height   获取屏幕分辨率的高
        },
        demo4(){
            //js的常量:值在程序执行过程中不会改变
            var PI = 3.1415926;//值不变
            
            /* js中的变量：用来储存数据的容器，值可以改变
            变量或者常量的命名规范:
            1.不能取关键字，var,function,ducument,alert....
            var function = 32;//报错
            2.必须以字母或者下划线开头，不能以数字开头 */
            var _age = ""//对
            // 3.遵循驼峰式命名
            var studentName;

            /* 变量:用来储存数据的容器，当声明一个变量时
            变量的作用域:
            1.全局变量:一般是在函数外部定义，作用于整个函数
            2.局部变量：定义在函数内部，只能被该函数
            生命周期:
            1.全局变量：从变量被定义直到程序被关闭而终止
            2.局部变量：从变量被定义直到函数被关闭而终止 */
            var i = "yi";//局部变量
        },
        demo5(){
            /* 五种基本数据类型，数字（number),字符串（string)，布尔(boolean）,空（null），未定义（undefined）
            检测数据类型用：typeof 变量   不同写法   typeof(变量)
            NaN不是一个数字，typeof(NaN)结果为number */
            var age = 18;//number
            var name = "张";//字符串
            // 布尔Boolean:true/false用来做判断条件
            var condition = true;//布尔值
            var kong = null;//空，有值null
            var sex;//undefined未定义,只声明了变量，已分配空间，没有赋值
                sex = "男";//赋值
            var age = 32;//声明同时直接赋值
            console.log('1typeof',typeof age,typeof(age));
            console.log('2typeof',typeof null,typeof [],typeof {});//都是object   因此需要用到instanceof来检测某个对象是不是另一个对象的实例，返回true或false
            let arr = [];
            let obj = {};
            console.log('方法1-判断是数组还是对象',obj instanceof Array);//false 判断obj不是数组
            console.log('方法1-判断是数组还是对象',arr instanceof Array);//true,判断arr是数组

            console.log('但是-instanceof',arr instanceof Object);//也会返回 true;这是因为 Array 是 object 的子类。

            console.log('方法2-判断是数组还是对象',Array.isArray(arr));// true      Array.isArray(参数) 用于判断值是否为数组   是返回true,否返回false
            console.log('方法2-判断是数组还是对象',Array.isArray(obj));// false

            console.log('方法3-判断是数组还是对象',arr.constructor === Array); //true
            console.log('方法4-判断是数组还是对象',arr.constructor === Object); //false

            // Object.prototype.toString.call(参数)方法可以精准判断变量类型
            // console.log('精准判断变量类型',Object.prototype.toString.call(arr));//[object Array]    需要截取第二个值
            console.log('精准判断变量类型',Object.prototype.toString.call(arr).slice(8,-1));
        },
        demo6(){
            //数据类型转换
            // 1.隐式转换(弱类型转换)
            // 使用+，-，*，/运算符来转换
            var num1 = 20;//数字（number)
            var num2 = "18";//字符串（string)
            var value1 = num1 + num2;//"+"把数字转字符串,然后字符串拼接
            var value2 = num1 - num2;//"-"字符串转数字，相减
            // 备注：数字和字符串相减结果为NaN(Not a Number不是一个数)
            console.log('++--',value1,typeof value1);
            /* 2.显示转换
            转字符串：String(变量)  或 变量.toString() 但不能转null/undefined
            转布尔值：Boolean(变量)
            转数字：Number(变量)  可以去掉小数点后的零   如20.00变20
            */
            var phone = 100;
            var transform1 = String(phone);
            var age = 6;
            var transform2 = age.toString();
            console.log('1显示转换String',transform1,typeof transform1);
            console.log('2显示转换toString',transform2,typeof transform2);

            console.log('1显示转换boolean',Boolean(13));//结果true
            console.log('2显示转换boolean',Boolean("13"));//结果true
            console.log('3显示转换boolean',Boolean(0));//结果false
            console.log('4显示转换boolean',Boolean(""));//结果false
            console.log('5显示转换boolean',Boolean(null));//结果false
            console.log('6显示转换boolean',Boolean(undefined));//结果false

            console.log('1显示转换number',Number("123"));//结果123
            console.log('2显示转换number',Number("哈哈"));//结果NaN
            console.log('3显示转换number',Number(true));//结果1
            console.log('4显示转换number',Number(false));//结果0
            console.log('5显示转换number',Number(null));//结果0
            console.log('6显示转换number',Number(undefined));//结果NaN
            /* 3.使用函数转换
            字符串转为整数  parseInt(变量)
            字符串转浮点型类型  parseFloat(变量)
            */
            console.log('1函数转换parseInt',parseInt("10.12"));//结果10，遇到小数点或者非数字就终止
            console.log('2函数转换parseInt',parseInt("哈哈"));//结果，首字符为非数字型，停止返回NaN
            console.log('3函数转换parseInt',parseInt("11哈哈"));//结果11，如果第一个字符是数字型，一直往后解析，直到碰到非数字型的字符停止，返回前面的数值
            console.log('4函数转换parseInt',parseInt("10101",2));//2进制，结果21，可以将不同进制数解析为十进制显示
            
            console.log('1函数转换parseFloat',parseFloat("11.22"));//结果11.22，
            console.log('2函数转换parseFloat',parseFloat("6.6.6"));//结果6.6，只能解析第一个小数点
            console.log('3函数转换parseFloat',parseFloat("0x10101",2));//结果0，只能解释十进制的形式
        },
        demo7(){
            /* 运算符:
            1.算术运算符:+,-,*,/,++,--,%(余数)
            +,-,*,/,%类似数学运算
            ++：在自身基础上+1
            --：在自身基础上-1
            a++:先运算赋值再自增
            ++a：先自增再运算赋值
            a--:先运算赋值再自减
            --a：先自减再运算赋值

            2.赋值运算符：=，+=,-=,*=,/=，%=
            a+=b:等价于a=a+b
            a-=b:等价于a=a-b
            a*=b:等价于a=a*b
            a/=b:等价于a=a/b
            a%=b:等价于a=a%b

            3.比较运算符：>,<,>=,<=,!=,==,===
                
            4.逻辑运算符:与&&,或||,非!
            与&&:只有&&符两边的等式同时成立,结果才为true否为flase
            &&与&区别:
            &&:前不对,不再执行后面
            &:前不对,依然执行后面(true为1,false为0)
            或||:只要有一个成立,就true,两不成立为false
            非! 结果取反  false变true   true变false
            
            ==与===区别
            ===等同符    类型和值相等才true
            ==等值符    值相等就true，不同会先转化类型再比较，比如true代表1，false代表0
            注意：NaN==NaN  //返回false，NaN和所有值包括自己都不相等

            5.三目运算符:(条件)?(语句1):(语句2)
            如果条件成立,结果为语句1,否为语句2
            
            优先级:()--乘除加减--赋值

            科学计数法    800000 = 8e5       0.00008 = 8e-5 
            */
            var a=16;
            var b=3;
            console.log('%',a%b);
            if(a>15&&b<1){
                console.log('&&',true);
            }else{
                console.log('&&',false);
            }
            var c=null;//空，null，undefined
            if(!c){
                console.log('!','非');
            }
            var t = a>15 ? 2:3;
            console.log('三目运算符',t);

            var e = 25;
            var k = 4+e++;
            console.log('e++',e,k);//e为26，k为29    这里先算k=4+25，再算a=a+1

            var u = 9;
            var m = 5-++u;
            console.log('++u',u,m);//u为10，m为-5   这里先算u=u+1，再算m=5-10
        },
        demo8(){
            //流程控制
            var i = 6;
            if(i==5){//不管成立与否，都会往下执行，除非方法里用return
                console.log("if=6");
            }else if(i==7){//不管成立与否，都会往下执行，除非方法里用return
                console.log("if=7");
            }else{//以上都不成立才执行
                console.log("什么都不是");
            }

            var k = 7
			switch(k){
				case 5:
                    console.log("小于6");
				    break;//break结束以下流程,如果不使用break，不管上面一个条件是否成立都继续向下判断
				case 0:
                    console.log("小于5");
				    break;
				case 8:
                    console.log("小于4");
				    break;
				default://以上case均不成立，才执行
                    console.log("什么都不是");
            }
            // 无需判断，直接遍历
            var arr = [1,2,3,4,5,6];
            for(let i=0;i<arr.length;i++){
                if(arr[i] == 3){
                    break;//直接终止循环
                }
                if(arr[i] == 3){
                    continue;//终止本次循环，进行下一次
                }
            }
            // 先判断，true才遍历
			var m=0;
			while(m<5){
                m++;
				console.log("while",m);
				if(m>2){
					break;//直接终止循环
				}
            }
            // 先走一次，再判断，true才遍历
            var p = 0;
			do{
				console.log("do==while");//弹两次
				p++;
			}while(p<2);
        },
    }
}

</script>

<style lang="less" scoped>

</style>