<template>
    <div style="padding: 10px">
        <div style="margin: 10px 0">
            站点1: <el-input v-model="search1" placeholder="请输入站点1的名称……" style="width: 25%" clearable/>
            <tr/>
            站点2: <el-input v-model="search2" placeholder="请输入站点2的名称……" style="width: 25%" clearable/>
            <tr/>
            线路: <el-input v-model="search3" placeholder="请输入线路的名称……" style="width: 25%" clearable/>
            <el-button type="primary" style="margin: 5px" @click="findPath">搜索途径站点</el-button>
        </div>


        <div class="block">
            <el-timeline style="padding-left: 20px">
                <div>
                    <el-tag v-for="tag in tags" :key="tag.name">
                        {{ tag.name }}
                    </el-tag>
                </div>

                <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="index"
                        :center="activity.center"
                >
                    {{ activity.content }}
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
                activities: [
                    {
                        // content: '',
                        // size: 'large',
                        // color: '#507cff',
                        // center: true,   横向时间轴
                    },
                ],
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
                    console.log(res)
                    this.loading = false
                    res.data.forEach(item => {              //改成站名
                        this.tags.push({name: item.name})
                        item.stations.forEach(station =>
                            this.activities.push({content: station.name, size: 'large', color: '#507cff',center: true})
                        )
                    })
                })
            }
        },
    }

</script>

<style scoped>

</style>