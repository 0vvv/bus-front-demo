<template>
    <div style="height: 50px; line-height:50px; border-bottom: 1px solid #ccc; display: flex">
        <div style="width: 200px;padding-left: 30px;font-weight: bold; color: chocolate">公交系统</div>
        <div style="flex: 1"></div>
        <div style="width: 100px">
            <el-dropdown>
            <span class="el-dropdown-link">
                  用户名<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>关注的路线</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>

</style>