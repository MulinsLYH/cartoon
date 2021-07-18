<template>
    <section id="v-tag">
        <!-- 注意v-if与v-else标签并排 -->
        <div>
            <p class="line-color" v-if="if_active==9">v-if</p>
            <p class="line-color" v-else-if="if_active==6">v-else-if</p>
            <p class="line-color" v-else>v-else</p>
        </div>
        <hr>
        <!-- v-show-->
        <!-- 同样是显示隐藏v-if与v-show的区别: 
            1.v-if是条件判断也能布尔值，判断为false时，元素节点删除找不到，相当于样式 visibility: hidden;
            2.v-show只能用布尔值true或false，为false时，元素节点还能找到，相当于样式 display: none;
        -->
        <div>
            <p class="line-color" v-show="show_active">v-show的true</p>
            <p class="line-color" v-show="!show_active">v-show的false</p>
        </div>

        <hr>
        <!-- v-for     index是下标，可以绑定事件上传-->
        <div v-for="(item,index) in for_list">
            <p class="line-color">
                {{item.title}}===
                <span v-if="item.state==0">状态0</span>
                <span v-if="item.state==2">状态2</span>
                <span v-if="item.state==6">状态6</span>
            </p>
        </div>
        <hr>
        <!-- v-model数据的双向绑定 -->
        <div>
            <input type="text" v-model="two_way" placeholder="请输入内容" maxlength="10"/>
        </div>
        <hr>
        <!-- 属性绑定v-bind简写成 : -->
        <div>
            <p class="line-color" v-bind:id="binding">v-bind绑定</p>
            <a class="line-color" :href="url">:绑定</a>
        </div>
        <hr>
        <!-- 事件绑定: v-on缩写成@ -->
        <div>
            <Button v-on:click="technique">v-on绑定事件</Button>
            <Button @click="technique">@绑定事件</Button>
        </div>
        <!-- 在正式vue项目里不需要v-cloak。在直接引用vue.js中,v-cloak解决屏幕闪动的问题: 当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码-->
        <div>
            <p class="line-color" v-cloak>{{binding}}</p>
        </div>
        <hr>
        <!-- v-text与v-html的区别:
            同样是填充内容，v-text识别不了标签，直接解析成字符串，v-html能识别标签
        -->
        <div>
            <p class="line-color" v-text="text_html"></p>
            <p class="line-color" v-html="text_html"></p>
        </div>
        <hr>
        <!-- v-pre没啥用，把花括号解析成字符串 -->
        <div>
            <p class="line-color" v-pre>{{binding}}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "v-标签",
    data(){
        return{
            if_active: 6,
            show_active: true,
            for_list: [
                {id: '01',title: 'v-for=01',state: 0},
                {id: '02',title: 'v-for=02',state: 2},
                {id: '03',title: 'v-for=03',state: 6}
            ],
            two_way: '',
            binding: 188,
            url: 'lianjie.com',
            text_html: '<h2>您好！</h2>'
        }
    },
    methods: {
        technique(){
            console.log('触发事件');
        }
    }
}
</script>

<style lang="less" scoped>
#v-tag{
    .line-color{
        color: white;
    }
}
</style>