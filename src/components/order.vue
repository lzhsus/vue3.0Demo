<template>
    <h1 class="page-header">订单中心：</h1>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">订单编号</th>
                    <th class="text-center">数量</th>
                    <th class="text-center">支付金额</th>
                    <th class="text-center">收货人姓名</th>
                    <th class="text-center">收货人电话</th>
                    <th class="text-center">收货地址</th>
                    <th class="text-center">租赁时间区间</th>
                    <th class="text-center">配送方式</th>
                    <th class="text-center">openId</th>
                    <th class="text-center">订单状态</th>
                    <th class="text-center">create_time</th>
                </tr>
            </thead>
            <tbody style="max-height: 700px;overflow-y: scroll;">
                <tr v-for="(item,index) in list" :key="index">
                    <td class="text-center small text-muted my-td">{{index+1}}</td>
                    <td class="text-center small text-muted my-td">
                        <router-link :to="{path: '/order/detail', query: {out_trade_no: item.out_trade_no }}">{{item.out_trade_no}}</router-link>
                    </td>
                    <td class="text-center small text-muted my-td">{{item.num}}</td>
                    <td class="text-center small text-muted my-td">{{item.totalFee}}</td>
                    <td class="text-center small text-muted my-td">{{item.address?item.address.name:""}}</td>
                    <td class="text-center small text-muted my-td">{{item.address?item.address.mobile:""}}</td>
                    <td class="text-center small text-muted my-td">
                        {{item.address?item.address.city+''+item.address.province+''+item.address.area+''+item.address.address_detail:''}}
                    </td>
                    <td class="text-center small text-muted my-td">
                        {{item.start}}~{{item.end}}<br>
                        共计：{{item.time}}
                    </td>
                    <td class="text-center small text-muted my-td">{{item.way?item.way.name:''}}</td>
                    <td class="text-center small text-muted my-td">{{item.openId}}</td>
                    <td class="text-center small text-muted my-td">
                        <van-tag v-if="item.type==1" type="primary">{{item.status_text}}</van-tag>
                        <van-tag v-else-if="item.type==2" type="primary">{{item.status_text}}</van-tag>
                        <van-tag v-else-if="item.type==3" type="primary">{{item.status_text}}</van-tag>
                        <van-tag v-else-if="item.type==4" type="default">{{item.status_text}}</van-tag>
                        <van-tag v-else-if="item.type==5" type="success">{{item.status_text}}</van-tag>
                        <van-tag v-else type="danger">未知</van-tag>
                    </td>
                    <td class="text-center small text-muted my-td">{{item.create_time}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <i></i>
</template>
<script>
import { toRefs,reactive,onMounted,onVnodeUnmounted   } from "vue";

import Api from "@/api/index";
export default {
    props:{},
    components:{

    },
    setup(props,context) {
        const data = reactive({
            active:0,
            list:[],
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
            Api.getUserOrderBuyList().then(res=>{
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
                    data.list = list;
                    console.log(list)
                }else{

                }
            })
        })
        return {
            ...toRefs(data)
        };
    }
};
</script>

<style scoped>
.my-td{
    max-width:83px; height:51px; word-wrap:break-word; word-break:break-all;
    min-width: 50px;
}
</style>
