<template>
    <section>
        <p>1-1-1-1</p>
        <!-- 具名插槽 -->
        <slot name="er"></slot>
        <p>3-3-3-3</p>
        <!-- 作用域插槽(或叫:带数据的插槽)-->
        <slot :data="list"></slot>
    </section>
</template>

<script>
export default {
    name: 'slot-',
    data () {
        return {
            list: [{ name: 'Q1' }, { name: 'Q2' }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
