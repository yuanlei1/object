<template>
    <div>
         <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium" border>
              <el-checkbox-button v-for="city in cities" :label="city" :key="city" border>{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <!-- <router-link to='/'><el-button>按钮</el-button></router-link> -->
    </div>
</template>

<script>
   const cityOptions = ['上海00000000000000000', '北京', '广州', '深圳'];
  export default {
    name:"helloWorld",
    data () {
      return {
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        cities: cityOptions
      };
    }
  }
</script>
<style>
  .el-checkbox-button {
    width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
