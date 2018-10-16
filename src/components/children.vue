<template>
      <div>
           <el-table border :span-method="arraySpanMethod"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
      </div>
</template>

<script>
     export default {
      data() {
        return {
          tableData: [{
            date: '2',
            name: '虎',
            address: '上海市普518 弄'
          }, {
            date: '2',
            name: '虎',
            address: '上海陀区金沙江路7 弄'
          }, {
            date: '2',
            name: '王',
            address: '上9 弄'
          }, {
            date: '3',
            name: '王',
            address: '上海市普陀区金沙江路 1516 '
          },
          {
            date: '3',
            name: '王小',
            address: '陀区金沙江路 1518 弄'
          }, {
            date: '4',
            name: '王小',
            address: '上海市517 弄'
          }, {
            date: '2',
            name: '小虎',
            address: '上海市普陀区金沙路 1519 弄'
          }, {
            date: '2',
            name: '小虎',
            address: '上海市普陀江路 1516 弄'
          }]
        }
      },
      created(){
         this.mergeYear(this.tableData)
      },
      methods:{
        mergeYear(arr) {
          let tempArr=[1],index=0
          arr.reduce((acc,cur,_index,_arr)=>{
            // debugger;
            // console.log(acc)
            // console.log(cur)
            // console.log(_index)
            console.log(_arr)
            if(acc.date!==cur.date) {
              tempArr[_index]=1
              index=_index
            }else{
              tempArr[index]++
            }
            // console.log(tempArr)
            return cur
          })
          arr.forEach((ele,index)=>{
            ele.rowspan=tempArr[index] || 0
          })
        },
        arraySpanMethod({row,column,rowIndex,columnIndex}){
            if (columnIndex===0) {
            return{
            rowspan:row.rowspan,
            colspan:1
            }
          }
        }
      }
    }
</script>



