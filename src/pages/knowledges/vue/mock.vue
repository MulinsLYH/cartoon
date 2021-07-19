<template>
    <section id="mock">
        <!--mock本地模拟数据-->
        <h1>四种渲染方式</h1>

        <h2>1.基础content渲染</h2>
        <div v-for="(item, index) in markers" :key="index" v-html="item.content"></div>

        <!-- 在template上使用for循环
        template的作用是模板占位符，可帮助我们包裹元素，但在循环过程当中，template不会被渲染到页面上 -->
        <h2>2.template模板渲染</h2>
        <template v-for="item,index in 2">
            <div>{{index}}===={{item}}</div>
        </template>
        
        <h2>3.slot插槽渲染</h2>
        <children>
            <p slot="er">2-2-2-2</p>
            <template slot-scope="user">
                <ul>
                    <li v-for="item in user.data">{{item.name}}</li>
                </ul>
            </template>
        </children>

        <h2>4.render渲染</h2>
    </section>
</template>

<script>
//npm install mockjs --save
import children from './quote/slot' 
export default {
    components: { children },
    data() {
        return {
            markers: []
        };
    },
    created() {
        // this.getJson();
        // this.demo();
    },
    methods: {
        // 例子
        
        getJson () {
            let self = this;
            self.$apihttp({
                url: '/store/price-list',
                method: 'post',
                data: {}
            }).then((res) => {
                self.markers = res.data.map(function (item) {
                return {
                    position: { lng: item.project_long, lat: item.project_lat },
                    lng: item.project_long,
                    lat: item.project_lat,
                    name: item.project_SALEname,
                    month_price: item.deal_PRICE,
                    increase: item.mom_rate,
                    project_id: item.project_id,
                    mom_rate: Number(Number(item.mom_rate).toFixed(1)),
                    active: 'rgba(42,130,228,0.8)',
                    z_index: -10,
                    text: `<div>喀喀喀<span>6666${item.project_SALEname}</span></div>`,
                    content: ''
                }
                })
                for (let i = 0; i < self.markers.length; i++) {
                    let line
                    if (self.markers[i].month_price) {
                        line = '<span>' + self.quantile(self.markers[i].month_price) + '万/㎡</span>'
                    } else {
                        line = '<span>-</span>'
                    }
                    if (self.markers[i].mom_rate >= 0) {
                        self.markers[i].content = `
                        <div class="add-container">
                            <div class="project-name">${self.markers[i].name}</div>
                            <button class="this-month">本月均价${line}</button>
                            <span class="compare-month">比上月</span>
                            <div class="percentage-i">
                            <span>${self.markers[i].mom_rate}%</span>
                            <i class="el-icon-caret-top" style="color: #D0021B;"></i>
                            </div>
                        </div>
                        `
                    } else {
                        self.markers[i].content = `
                        <div class="add-container">
                            <div class="project-name">${self.markers[i].name}</div>
                            <button class="this-month">本月均价${line}</button>
                            <span class="compare-month">比上月</span>
                            <div class="percentage-i">
                            <span>${self.markers[i].mom_rate}%</span>
                            <i class="el-icon-caret-bottom" style="color: #6BCB04;"></i>
                            </div>
                        </div>
                        `
                    }
                }
            }).catch((err) => {
                console.log('error',err);
            })
        },
        quantile (num) {
            if (num === '') {
                return ''
            }
            // let chu = Number(num) / 10000
            // let dian = chu.toFixed(2)
            // return Number(dian).toLocaleString()
            return ((Number(num) / 10000).toFixed(2)).toLocaleString()
        },
        /* 调用mock接口 */
        demo () {
            // let self = this;
            // self.$apihttp({
            //     url: '/store/goods-list',
            //     method: 'post',
            //     data: { store_id: 12, current_page: 3, page_size: 10 }
            // }).then((res) => {
            //     console.log('后台返回数据---', res)
            // }).catch((err) => {
            //     console.log('error',err);
            // })
            let that = this;
            let param = {
                store_id: 11,
                current_page: 23,
                page_size: 13
            }
// mock请求 post 两种方式都可以； get第二种也许后台不能接收数据

            that.$apihttp({
                url:'/store/goods-list',
                method:'post',
                data:param
            }).then((res)=>{
                console.log('后台返回数据',res)
            }).catch((err)=>{
                console.log('error',err)
            })
            // that.$apihttp.post('/store/goods-list',param).then((res)=>{
            //     console.log('后台返回数据',res)
            // }).catch((err)=>{
            //     console.log('error',err)
            // })



            that.$apihttp({
                url:'/store/goods-detail',
                method:'post',
                data:{goods_id:11}
            }).then((res)=>{
                console.log('后台返回数据后台返回数据后台返回数据',res)
            }).catch((err)=>{
                console.log('error',err)
            })

        }

    }
}
</script>

<style lang="less" scoped>
#mock {
    color: white;
    /deep/ .add-container {
        width: 155px;
        height: 55px;
        background: rgba(42,130,228,0.8);
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        margin-top: 5px;
        .project-name {
            width: 100%;
            height: 25px;
            text-align: center;
            line-height: 25px;
            color: white;
            font-size: 12px;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }
        .this-month {
            width: 100px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            color: #5E92C5;
            background: white;
            border-radius: 8px;
            font-size: 10px;
            border: none;
            outline: none;
            overflow: hidden;
            position: absolute;
            top: 28px;
            left: 5px;
        }
        .compare-month {
            color: white;
            font-size: 10px;
            position: absolute;
            top: 24px;
            right: 5px;
        }
        .percentage-i {
            position: absolute;
            top: 38px;
            right: 2px;
            i {
                font-size: 18px;
                float: right;
            }
            span {
                color: white;
                font-size: 10px;
                float: right;
                padding: 3px 0 0 0;
            }
        }
        .percentage-span {
            color: white;
            font-size: 10px;
            position: absolute;
            top: 40px;
            right: 5px;
        }
    }
}
</style>
