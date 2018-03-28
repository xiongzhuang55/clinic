<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/images/logo.png">
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item, index) in navItems" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="banner">
      <div id="ad1" class="carousel slide" data-ride="carousel" data-interval="2000">
        <div class="carousel-inner">
          <div v-for="(item, index) in bannerItems" class="item" :class="item.type" :key="index">
            <img :src="item.url" alt="">
          </div>
        </div>
        <!--左右切换的按钮-->
        <a class="carousel-control left" href="#ad1" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="carousel-control right" href="#ad1" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
        <ul class="carousel-indicators">
          <li data-target="#ad1" class="" data-slide-to="0"></li>
          <li data-target="#ad1" class="" data-slide-to="1"></li>
          <li data-target="#ad1" class="" data-slide-to="2"></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      navItems: ['首页', '产品介绍', '技术支持', '经典案例', '行业新闻', '关于我们', '联系我们'],
      bannerItems:[
        {
          'url': require('./assets/images/banner_1.png'),
          'type': 'active'
        },
        {
          'url': require('./assets/images/banner_2.png'),
          'type': ''
        },
        {
          'url': require('./assets/images/banner_3.png'),
          'type': ''
        }
      ]
    };
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "./common/css/index.styl"

#app
  width 1200px
  margin 0px auto
  color #2c3e50
  .logo
    display flex
    height 100px
    align-items center
    text-align center
    justify-content center
  .nav
    ul
      width 90%
      margin 0px auto
      display flex
      line-height 90px
      align-items center
      text-align center
      justify-content center
      li
        flex 1
        font-size 18px
        font-weight bold
        a
          display inline-block
          width 100%
          height 100%
</style>
