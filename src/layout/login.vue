<template>
  <div>
    <div>
      <el-input v-model="input" style="width: 240px;margin-right: 10px;" placeholder="Please input"/>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
      <el-button @click="handleReset">重置</el-button>
    </div>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="180"/>
        <el-table-column prop="name" label="姓名" width="180"/>
        <el-table-column prop="email" label="邮件" width="180"/>
        <el-table-column prop="address" label="地址"/>
      </el-table>
    </div>

    <div class="pagination-container">
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="page" :page-size="size" layout="prev, pager, next"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script setup lang="js">
import {onMounted, ref} from 'vue';
import {getPagination, getUser} from "../../api/axiosInstance.js";

// 表格数据
const tableData = ref([]);
// 分页参数
const total = ref(0)
const page = ref(1)
const size = ref(5)
// 搜索框
const input = ref('')


onMounted(() => {
  getListData()
})


/**
 * 搜索
 */
const handleSearch = ()=>{
  getListData();
}

/**
 * 重置
 */
const handleReset = ()=>{
  input.value='';
  getListData();
}

/**
 * 加载表格数据
 */
const getUserRoles = async () => {
  tableData.value = await getUser()
}

/**
 * 获取分页数据的方法
 */
const getListData = async () => {
  const result = await getPagination({
    page: page.value,
    size: size.value,
    name: input.value,
  })
  tableData.value = result.records
  total.value = result.total
}


/**
 * 分页size 改变触发
 */
const handleSizeChange = currentSize => {
  size.value = currentSize
  getListData()
}

/**
 * 分页 页码改变触发
 */
const handleCurrentChange = currentPage => {
  page.value = currentPage
  getListData()
}

</script>
<style lang="scss" scoped>
@use '~/assets/login' as *;
</style>