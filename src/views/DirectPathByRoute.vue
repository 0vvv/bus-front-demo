<template>
    <div style="padding: 10px">
        <div style="margin: 10px 0">
            站点1:
            <el-input v-model="search1" placeholder="请输入站点1的名称……" style="width: 25%" clearable/>
            <tr/>
            站点2:
            <el-input v-model="search2" placeholder="请输入站点2的名称……" style="width: 25%" clearable/>
            <tr/>
            线路:
            <el-input v-model="search3" placeholder="请输入线路的名称……" style="width: 25%" clearable/>
            <el-button type="primary" style="margin: 5px" @click="findPath">搜索途径站点</el-button>
        </div>
        <div class="block">
            <el-timeline v-for="eachroute in route" style="padding-left: 20px">
                <div>
                    <el-tag :key="eachroute.name">
                        {{ eachroute.name }}
                    </el-tag>
                </div>

                <el-timeline-item
                        v-for="(station, index) in eachroute.stations"
                        :key="index"
                        color="#507cff"
                        size='large'
                        :timestamp="index"
                        center="true"
                >
                    {{ station.name }}
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    import request from "@/utils/request";

    export default {
        name: "DirectPathByRoute",
        components: {},
        data() {
            return {
                loading: true,
                search1: '',
                search2: '',
                search3: '',
                route: [],
                // activities: [
                //     {
                //         // center: true,   横向时间轴
                //     },
                // ],
                tags: [
                    // { name: 'Tag 1', type: '' },
                ],
            }
        }, created() {  //页面加载的时候调用
            this.findPath();
        },
        methods: {
            findPath() {
                this.loading = true
                request.get("getTwoStationOnThisPathDirectPathByName", {
                    params: {
                        name1: this.search1,
                        name2: this.search2,
                        routename: this.search3,
                    }
                }).then(res => {
                    this.tags = []
                    // this.activities = []
                    this.route = []
                    console.log(res)
                    this.loading = false
                    this.route = res.data
                    // res.data.forEach(item => {
                    //     this.tags.push({name: item.name})
                    //     item.stations.forEach(station =>
                    //         this.activities.push({content: station.name, size: 'large', color: '#507cff', center: true})
                    //     )
                    // })
                })
            }
        },
    }

</script>

<style scoped>

</style>