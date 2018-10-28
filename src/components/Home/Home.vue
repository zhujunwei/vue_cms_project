<template>
  <div id="Home">
    <div class="home-swiper"> 
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item.img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="grid">
      <ul>
        <li v-for="item in grids" :key="item.id">
          <router-link :to="{path: item.path}">
            <img :src="item.src" alt=""/>
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import src1 from '../../assets/新闻资讯.png'
import src2 from '../../assets/图文分享.png'
import src3 from '../../assets/商品展示.png'
import src4 from '../../assets/资讯.png'
import src5 from '../../assets/留言反馈.png'
import src6 from '../../assets/联系我们.png'

var grids = [
  {id:1, src: src1, title: "新闻资讯", path: "/newslist"},
  {id:2, src: src2, title: "图文分享", path: "/photos/list/0"},
  {id:3, src: src3, title: "商品展示", path: "newslist"},
  {id:4, src: src4, title: "资讯", path: "newslist"},
  {id:5, src: src5, title: "留言反馈", path: "newslist"},
  {id:6, src: src6, title: "联系我们", path: "newslist"}
]

export default {
  name: 'Home',
  data(){
    return {
      name: "",
      swiperList: [],
      grids: grids
    }
  },
  created(){
    this.$axios.get('getlunbo')
      .then(res => {
        if(!res.data.status){
          this.swiperList = res.data.message
        }
        
      })
      .catch(err => {
      })
  }
}
</script>
<style lang="scss" scoped>
  #Home{
    width: 100%;
    height: auto;
    padding: 40px 0 55px;
  }
  .mint-swipe{
    width: 100%;
    height: 200px;
  }
  .mint-swipe-item img{
    width: 100%;
    height: 200px;
  }
  .grid {
    width: 100%;
    height: auto;
    margin-top: 25px;
    ul{
      display: flex;
      list-style: none;
      align-items: center;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      li{
        width: 25%;
        list-style: none;
        text-align: center;
        font-size: 14px;
        margin-bottom: 15px;
        a{
          display: block;
          color: #333;
          text-decoration: none;
          img{
            width: 40px;
          }
        }
      }
    }
    
  }
</style>


