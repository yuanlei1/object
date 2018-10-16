<template>
  <div id="app">
      <!-- <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to='helloWorld'><el-button size="mini" @click="handleEdit()">编辑</el-button></router-link>
            <router-link to='Children'><el-button size="mini" type="danger" @click="handleDelete()">删除</el-button></router-link>
          </template>
        </el-table-column>
      </el-table> -->
      <router-view/>
  </div>
</template>

<script>
// export default {
//   name: 'App',
//    data() {
//         return {
//           tableData: [{
//             date: '2016-05-02',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1518 弄'
//           }, {
//             date: '2016-05-04',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1517 弄'
//           }, {
//             date: '2016-05-01',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1519 弄'
//           }, {
//             date: '2016-05-03',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1516 弄'
//           }]
//         }
//       },
//       methods:{
//         handleEdit(){
//           // alert(0)
//         },
//         handleDelete(){
//           // alert(1)
//         }
//       }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
