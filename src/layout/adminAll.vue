
<template>
  <div>
    admin
  </div>
</template>
<script lang="js" setup>
import { computed, ref, onMounted } from 'vue';
import { statistics } from "../../api/axiosInstance.js";
import _ from "lodash";

// 获取卡片后台数据
const statis =  () => {
  statistics().then((res) => {
        // cart.value = res.panels;
        console.log(res, '11')
      })
      .catch((err) => {
        console.error('获取数据失败:', err);
      });
}

onMounted(() => {
  statis();
})
</script>


<style lang="scss" scoped>

</style>
