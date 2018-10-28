<template>
  <div id="app">
    <mt-header fixed :title="tabName">
      <span  slot="left">
        <mt-button icon="back" @click="headerBack">返回</mt-button>
      </span>
      <mt-button  slot="right">登录注册</mt-button>
    </mt-header>
    <!-- 路由组件出口 -->
    <router-view/>
    <mt-tabbar fixed v-model="selectedTabbar">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selectedTabbar: "index",
      tabName:"微商城"
    }
  },
  methods: {
    headerBack(){ //返回
      this.$router.back()
    }
  },
  created(){
    this.tabName = this.$route.meta.title ||  "微商城";
    this.selectedTabbar = this.$route.name;
  },
  watch: {
    selectedTabbar: function(newValue, oldValue){
      this.$router.push({
        name: newValue
      })
    },
    $route(to,from){
      this.tabName = to.meta.title || "微商城"
    }

  }
}
</script>

<style>
  html, body{
    width: 100%;
    height: 100%;
  }
  html, body, div{
    padding: 0;
    margin: 0;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
