<template>
    <div>
        <el-menu
                style="width: 230px; min-height: calc(100vh - 50px)"
                :default-active="path"
                class="el-menu-vertical-demo"
                router
        >
            <el-sub-menu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>基本信息查询</span>
                </template>
                    <el-menu-item index="/home">线路基本信息</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="22">
                <template #title>
                    <i class="el-icon-menu"></i>
                    <span>站点查询</span>
                </template>
                <el-menu-item index="1">线路站点信息</el-menu-item>
                <el-menu-item index="2">站点停靠线路</el-menu-item>
                <el-menu-item index="/directpathbyroute">起止沿线站点</el-menu-item>
                <el-menu-item index="/directroute">直达路线判断</el-menu-item>
                <el-menu-item index="4">最短路径</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="33">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>班次查询</span>
                </template>
                <el-menu-item index="">unfinished</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="44">
                <template #title>
                    <i class="el-icon-menu"></i>
                    <span>分析查询</span>
                </template>
                <el-menu-item index="">unfinished</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="55">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>线路关系</span>
                </template>
                <el-menu-item index="">unfinished</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script>
    import request from "@/utils/request";

    export default {
        name: "Aside",
        data() {
            return {
                path: this.$route.path   // 设置默认高亮的菜单
            }
        },
    }
</script>

<style scoped>

</style>