<template>
    <section id="modifier">
        <!-- .trim过滤首尾的空格 -->
        <div>
            <input type="text" v-model.trim="value">
        </div>
        <hr>
        <!-- .lazy鼠标离开input框才会更新数据 -->
        <div>
            <input type="text" v-model.lazy="value">
        </div>
        <hr>
        <!-- 限制输入只能是数字 -->
        <div>
            <input type="text" v-model.number="value">
        </div>
        <hr>
        <!-- 阻止事件冒泡1 -->
        <div>
            <Button @click.stop="test">test</Button>
        </div>
        <hr>
        <!-- 阻止默认行为 比如表单的提交、a标签的跳转就是默认事件-->
        <div>
            <a @click.prevent="test">a标签</a>
        </div>
        <hr>
        <!-- 阻止事件冒泡2 -->
        <div>
            <Button @click.self="test">self</Button>
        </div>
        <hr>
        <!-- 只执行一次之后都不会再执行 -->
        <div>
            <Button @click.once="test">once</Button>
        </div>
        <hr>
        <!-- 事件触发是目标往外冒泡,先1 后2 -->
        <div @click.capture="test(1)">
            <Button @click="test(2)">capture</Button>
        </div>
        <hr>
        <!--当前组件的事件是不会触发的，需要用native才能触发  -->
        <div>
            <!-- <My-component @click.native="shout(3)"></My-component> -->
        </div>
        <hr>
        <!-- 监听按键的指令 -->
        <div>
            <input type="text" @keyup.enter="test(1)">
            <Button @click.enter="test(1)">enter</Button>
        </div>
    </section>
</template>

<script>
export default {
    name: "vue修饰符",
    data(){
        return{
            value: 0
        }
    },
    methods: {
        test(index){
            console.log('触发事件',index);
        }
    }
}
</script>

<style lang="less" scoped>

</style>