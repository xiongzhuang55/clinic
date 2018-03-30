<template>
    <div class="about-div">
      <img-div></img-div>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/images/wawa.png" alt="">
        </el-col>
        <el-col :span="18">
          <div>
            <h2>我们的文化</h2>
            <span>
              博学而后成医，厚德而后为医，谨慎而后行医。
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-for="(item, index) in publicData.publicData" :key="index">
        <el-col :span="6">
          <img src="../../assets/images/wawa.png" alt="">
        </el-col>
        <el-col :span="18">
          <div>
            <h2>{{item.title}}</h2>
            <p v-for="(it, ind) in item.text" :key="ind">
              <span>{{it}}</span>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import imgDiv from '../about/public.vue'
  export default {
    data () {
      return {
        "publicData":''
      }
    },
    components:{
      imgDiv
    },
    mounted () {

    },
    created () {
      this.$http.get('/api/about').then((res) => {
        this.publicData = res.body.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
