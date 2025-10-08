<template>
  <div class="container">
    <div class="grid-container">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="grid-item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// 示例数据，可以根据实际情况修改
const items = ref([
  '项目 1', '项目 2', '项目 3', '项目 4',
  '项目 5', '项目 6', '项目 7', '项目 8',
  '项目 9', '项目 10', '项目 11' // 最后一行只有3个元素，会左对齐
]);
</script>

<style scoped>
.container {
  width: 100%;
  box-sizing: border-box;
}

.grid-container {
  /* 右对齐容器 */
  text-align: left;
  /* 清除浮动 */
  overflow: hidden;
}

.grid-item {
  /* 使元素在一行显示 */
  width: calc(25% - 10px);
  /* 设置最小宽度，防止过窄 */
  min-width: 50px;
  /* 高度示例 */
  height: 80px;
  /* 间距 */
  margin: 5px;
  /* 样式美化 */
  background-color: #e0f2fe;
  border: 1px solid #93c5fd;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

</style>
