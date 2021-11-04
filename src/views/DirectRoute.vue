<template>
  <!--    给两个站点，返回直达的公交车路线名-->
  <div style="padding: 10px">
    <!--        搜索框-->
    <div style="margin: 10px 0">
      站点1:
      <el-input v-model="search1" placeholder="请输入站点1的名称……" style="width: 20%" clearable/>
      <tr></tr>
      站点2:
      <el-input v-model="search2" placeholder="请输入站点2的名称……" style="width: 20%" clearable/>
      <el-button type="primary" style="margin: 5px" @click="load">搜索直达线路名称</el-button>
    </div>
    <tr></tr>
    <el-table :data="tableData" border stripe style="width: 25%">
      <el-table-column prop="name" label="路线名称" sortable/>
      <el-table-column prop="directional" label="路线方向" />
    </el-table>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "DirectRoute",
  components: {},
  data() {
    return {
      search1: '',
      search2: '',
      tableData: [],
    }
  },
  created() {  //页面加载的时候调用load
    this.load();
  },
  methods: {
    load() {     //给到一个url和参数
      request.get("/StationLine/directpathbetweentwostations/" + this.search1 + "-" + this.search2, {
        params: {
          name1: this.search1,
          name2: this.search2,
        }
      }).then(res => {  //结果放在.then里面，通过=>取后台返回结果
        console.log(this.search1 + " " + this.search2)
        console.log(res.data)
        if (res.data.code == "00000") {
          this.$message.success("查询成功！")
          this.tableData = res.data.data
        } else if (this.search1!="" && this.search2!=" " &&res.data.code == "A0001")
          this.$message.warning("不存在直达线路！请输入新的数据再次尝试！")
      })
    },
  }
}
</script>

<style scoped>

</style>