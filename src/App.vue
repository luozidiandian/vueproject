<template>
  <div>
    <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item :index="menu.path" v-for="(menu, index) in menuList" :key="index" v-if="!menu.hidden">
        <span>{{menu.name}}</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        menuList: this.$router.options.routes
      };
    },
    methods:
      {}
  }
</script>
