<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in cards" :key="index">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>{{ item.title }}</span>
              <el-tag :type="item.unitColor || 'info'" effect="plain">
                {{ item.unit }}
              </el-tag>
            </div>
          </template>

          <div class="card-header">
            <span>{{ item.subTitle }}</span>
            <el-tag :type="item.unitColor || 'info'" effect="plain">
            {{ item.subValue }}
            </el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { statistics } from "../../api/axiosInstance.js";
import _ from "lodash";

// 使用更合适的变量名
const cards = ref();

// 获取卡片后台数据
const fetchCards = async () => {
  try {
    const { panels } = await statistics();
    // 进行深拷贝，防止数据意外变更
    cards.value = _.cloneDeep(panels);
    console.log(panels, '卡片数据');
  } catch (err) {
    console.error("获取卡片数据失败:", err);
  }
}

onMounted(() => {
  fetchCards();
})
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
}
</style>

