<template>
    <div class="wrappers">
        <el-row class="boxs">
            <el-col :span="6">
                <div style="margin-left: 0px;position: relative;"  class="grid-content bg-purple">
                    <div style="height: 30px;text-align: left;padding: 0 10px;">
                        <span class="titleBig">学历结构</span>
                        <el-divider class="line"></el-divider>
                    </div>
                    <el-radio-group  v-model="radio" style="display: inline-block;position: absolute;right: 5px;top: 55px;z-index: 99999999;">
                        <el-radio  class="radio" :label="1">全部</el-radio>
                        <el-radio  class="radio" :label="2">全日制</el-radio>
                        <el-radio  class="radio" :label="3">在职</el-radio>
                    </el-radio-group>
                    <div id="xueli" style="width:100%;height: 100%;">
                        
                    </div>
                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
                <div style="height: 30px;text-align: left;padding: 0 10px;">
                    <span class="titleBig">干部情况</span>
                    <el-divider class="line"></el-divider>
                </div>
                
                <div id="ganbu" style="width:100%;height: calc(100%-35px)">
                    <el-row :gutter="10" class="row-con">
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                        <el-col :span="6" class="colheight">
                            <el-card class="card">
                            div自定义内容
                            </el-card>
                        </el-col>
                    </el-row >
                    <!-- <div v-for="n in divList">{{n.name}}</div> -->
                    <!-- <el-row :gutter="10">
                        <el-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">1</div></el-col>
                        <el-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">2</div></el-col>
                        <el-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div>3</el-col>
                        <el-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">4</div></el-col>
                        <el-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div>3</el-col>
                        <el-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">4</div></el-col>
                    </el-row> -->
                </div>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
        </el-row>
        <el-row class="boxs" style="margin-top: 20px;">
            <el-col :span="18"><div style="margin-left: 0px;" class="grid-content bg-purple">3</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
        </el-row>
    </div>
</template>
<script>
export default{
    name:'overview',
    data(){
        return {
            logining: false,
            systemTime :'2022-03-16',
            name:'',
            screenWidth: document.body.clientWidth,
            screenHeight: document.body.clientHeight,
            radio:1,
            divList:[{
                name:'1',
                num:'500'
            },
            {
                name:'2',
                num:'500'
            },
            {
                name:'3',
                num:'500'
            },
            {
                name:'4',
                num:'500'
            },
            {
                name:'5',
                num:'500'
            },
            {
                name:'6',
                num:'500'
            },
            {
                name:'7',
                num:'500'
            }
            ]
        }
    },
    watch:{
        screenWidth(val){
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if(!this.timer){
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function(){
                    // 打印screenWidth变化的值
                    //console.log(that.screenWidth)
                    that.timer = false
                },400)
            }
        },
    },
    mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.screenWidth
                window.screenHeight = document.body.screenHeight
                that.screenWidth = window.screenWidth
                that.screenHeight = window.screenHeight
            })()
        }
        this.xueliChart()
        this.ganbuList()
    },
    methods:{
        xueliChart () {
            // var height = document.getElementById('xueli').parentNode.offsetHeight;
            // console.log(height)
            console.log(this.screenWidth)
            // document.getElementById('xueli').style.height=this.screenHeight
            // document.getElementById('xueli').style.width=this.screenWidth
            var myChart = this.$echarts.init(document.getElementById('xueli'));
                // 指定图表的配置项和数据
            var option = {
                title: {
                   
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '6%',
                    containLabel: true
                },
                legend: {
                    data:['全部','全日制','在职']
                },
                xAxis: {
                    data: ["研究生","本科","专科","其他"]
                },
                yAxis: [{
                    type: 'value',
                    name: '数量/人',
                    axisLine: {show:true},
                    axisTick: {show:true},
                }],
                series: [{
                    data:[10,20,30,10,50,45],
                    type: 'bar',
                    color:'#AA0112',
                    markPoint: {
                        itemStyle: {backgroundColor:'#AA0112'},
                        data: [
                            { value: 10, xAxis: 0, yAxis: 10 },
                            { value: 20, xAxis: 1, yAxis: 20 },
                            { value: 30, xAxis: 2, yAxis: 30 },
                            { value: 10, xAxis: 3, yAxis: 10 },
                            { value: 50, xAxis: 4, yAxis: 50 },
                            { value: 45, xAxis: 5, yAxis: 45 }
                        ]
                    }
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
    
        },
        ganbuList(){
            var height = document.getElementById('ganbu').offsetHeight;
            console.log(height)
        }

    }
}
</script>
<style scoped>
    .wrappers{
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
    }
    .boxs{
        width:100%;
        height:400px;
    }
    .el-col{
        height: 100%;
    }
    .bg-purple{
        background: #fff;
        height: 100%;
        margin-left: 20px;
    }
    .titleBig{
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
    }
    .line{
        margin: 10px 0!important;
    }
    .radio{
        margin-right: 8px!important;
    }
    .row-con {
        display: flex;
        flex-flow: row wrap;
        margin: 25px 5px 5px 5px!important;
    }
    .row-con .card {
        height: 40px;
    }
   
</style>