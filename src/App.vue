<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/images/logo.png">
    </div>
    <div class="nav" :class="{'nav-fixed': fixed}">
      <ul>
        <li v-for="(item, index) in navItems" :key="index">
          <a @click="scroll">
            <router-link :to="{path:'/',query:{id:item.href}}">
              {{item.title}}
            </router-link>
          </a>
        </li>
      </ul>
    </div>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import footer from './components/footer.vue'
export default {
  name: 'App',
  data () {
    return {
      "fixed": false,
      navItems: [
        {
          "title":'首页',
          "href": "0"
        },
        {
          "title":'产品介绍',
          "href": "500"
        },
        {
          "title":'技术支持',
          "href": "1100"
        },
        {
          "title":'经典案例',
          "href": "1900"
        },
        {
          "title":'行业新闻',
          "href": "2400"
        },
        {
          "title":'关于我们',
          "href": "3100"
        },
        {
          "title":'联系我们',
          "href": "3400"
        }
      ]
    };
  },
  components: {
    'v-footer': footer
  },
  mounted () {
    this.scroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    scroll () {
      let id = this.$route.query.id;
      $('html, body').animate({
        scrollTop: id
      },300)
      if (id > 500) {
        this.fixed = true
      }
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < 450){
        this.fixed = false
      }else this.fixed = true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "./common/css/index.styl"

#app
  .logo
    display flex
    widthMargin(1200px)
    height 100px
    align-items center
    text-align center
    justify-content center
  .nav
    widthMargin(1200px)
    &.nav-fixed
      position fixed
      top 0
      width 100%
      background-color #fff
      z-index 999
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
          &:hover
            color #00ace9
  .el-carousel
    widthMargin(1200px)
  .about-div
    widthMargin(1200px)
    .el-row
      margin 20px 0
      h2
        margin 10px 0
      span
        line-height 30px
</style>
