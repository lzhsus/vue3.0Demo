<template>
<div class="row row-margin">
    <div class="box box-solid box-primary">
        <div class="box-header">
            <h3 class="box-title">订单信息：{{detail.out_trade_no}}</h3>
        </div>
        <div class="box-body"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">商品名称：{{detail.name}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">商品id：{{detail.proId}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">商品单价：{{detail.price}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">create_time：{{detail.create_time}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">天数：{{detail.day}}天</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">日期：{{detail.start}}~{{detail.end}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">订购数量：{{detail.num}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">用户openId：{{detail.openId}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">支付时间：{{detail.pay_time}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">时间：{{detail.time}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">订单状态：
                    <van-tag v-if="detail.type==1" type="primary">{{detail.status_text}}</van-tag>
                    <van-tag v-else-if="detail.type==2" type="primary">{{detail.status_text}}</van-tag>
                    <van-tag v-else-if="detail.type==3" type="primary">{{detail.status_text}}</van-tag>
                    <van-tag v-else-if="detail.type==4" type="default">{{detail.status_text}}</van-tag>
                    <van-tag v-else-if="detail.type==5" type="success">{{detail.status_text}}</van-tag>
                    <van-tag v-else type="danger">未知</van-tag>
                </div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">退款时间：{{detail.refund_time}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">支付金额：{{detail.totalFee}}</div>
                <div class="col-md-4 col-cd-4 col-sm-4 themed-grid-col">配送方式：{{detail.way?detail.way.name:''}}</div>
            </div>
        </div>
    </div>
</div>
<i></i>
</template>

<script>
import { ref,toRefs,reactive,onMounted,onVnodeUnmounted,onBeforeMount,onBeforeUpdate,onUpdated } from "vue";
import Api from "@/api/index";
import navigation from "./navigation.vue";
export default {
    components:{
        navigation
    },
    // steup 想定一 beforeCreated or created
    // beforeMounted mounted 挂载前 挂载完成
    // beforeUpdated updated 即将更新渲染 更新成功
    // beforeUnmounted unmounted
    setup(props,context) {  
        const data = reactive({
            active:0,
            detail:[],
            status_txt : {
                "100":"未支付",
                "101":"已支付--用户支付中",
                "102":"获取到用户支付信息",
                "103":"支付失败",
                "201":"商家已接单",
                "301":"商家已发货等待物流",
                "302":"物流已上门取货",
                "303":"暂无物流信息",
                "304":"获取到物流信息",
                "305":"物流信息异常",
                "306":"自营配送",
                "401":"用户已确认收货",
                "501":"自动取消订单",
                "502":"用户取消订单",
                "601":"用户申请退款",
                "602":"管理员操作退款",
                "603":"已完成退款",
                "604":"退款失败",
                "701":"已归还",
                "703":"申请归还中"
            }
        })
        onMounted(()=>{
            Api.getUserOrderBuyList({
                out_trade_no:"2020070807594567"
            }).then(res=>{
                console.log(res)
                if(res.success){
                    res = res.result||{}
                    let list = res.list||[]
                    list = list.map(item=>{
                        if(item.status==100){
                            item.type=1
                        }else if(item.status==101||item.status==102||item.status==103||item.status==201||item.status==301||item.status==302||item.status==303||item.status==304||item.status==305||item.status==306){
                            item.type=2
                        }else if(item.status==401||item.status==703){
                            item.type=3
                        }else if(item.status==501||item.status==502||item.status==601||item.status==602||item.status==603||item.status==604){
                            item.type=4
                        }else if(item.status==701){
                            item.type=5
                        }
                        item.status_text = data.status_txt[item.status]||'';
                        if(item.create_time){
                            item.create_time = moment(item.create_time).format("YYYY-MM-DD HH:mm:ss")
                        }
                        if(item.refund_time){
                            item.create_time = moment(item.refund_time).format("YYYY-MM-DD HH:mm:ss")
                        }
                        return item
                    })
                    data.detail = list[0];
                }
            })
        })
        return {
            ...toRefs(data)
        };
    }
};
</script>

<style>
/* @import url("../assets/css/dashboard.css"); */

</style>
