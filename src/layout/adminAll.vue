<template>
  <el-row :gutter="0" class="box">
    <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="right">
      <div>
        <h1>
          欢迎光临
        </h1>
        <span>请您登录网易云音乐后台管理系统</span>
      </div>
    </el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="left">
      <div>
        <h1>
          欢迎回来
        </h1>
        <el-divider content-position="center" style="width: 60%;">
          账号密码登录
        </el-divider>
        <el-form class="login-form" ref="loginFromRef" :model="loginForm" :rules="loginRules">

          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" name="username" type="text" v-model="loginForm.username">
              <template #prefix>
                <span class="svg-container">
                  <el-icon :size="15" class="icon">
                    <User />
                  </el-icon>
                </span>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input placeholder="请输入密码" name="password" v-model="loginForm.password" show-password>
              <template #prefix>
                <span class="svg-container">
                  <el-icon :size="15" class="icon">
                    <Lock />
                  </el-icon>
                </span>
              </template>
            </el-input>
          </el-form-item>

          <el-button type="primary" :loading="loading" @click="handleLogin" class="button">登录</el-button>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, reactive } from 'vue';
import { validatePassword } from '../utils/rules';
import { User, Lock } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import _ from "lodash";

const store = useStore();
const router = useRouter();
const loading = ref(false);

// 数据源
const loginForm = ref({
  username: 'admin',
  password: 'admin'
})

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: computed(() => {
        return '用户名不能为空!'
      })
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})


// 登录逻辑
const handleLogin = _.throttle(() => {
  loading.value = true; // 开始loading效果

  store.dispatch("login", {
    username: loginForm.value.username,
    password: loginForm.value.password
  }).then((res) => {
    console.log("登录成功!");
    router.push('/login');
  }).catch((error) => {
    console.error("登录失败:", error);
  }).finally(() => {
    loading.value = false; // 确保loading状态最终被重置
  });
}, 2000); // 设置节流间隔为2秒


// 键盘点击回车键进行登录功能
function onKeyUp(e) {
  if (e.key == "Enter") handleLogin();
}
// 键盘点击回车键进行登录功能
onMounted(() => {
  document.addEventListener("keyup", onKeyUp);
})
// 键盘点击回车键进行登录功能
onBeforeUnmount(() => {
  document.addEventListener("keyup", onKeyUp);
})
</script>
<style lang="scss" scoped>
@import '~/assets/login.scss';
</style>
