<template>
    <div class="about-div">
      <img-div></img-div>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/images/wawa.png" alt="">
        </el-col>
        <el-col :span="18">
          <div>
            <h2>我们的公司</h2>
            <span>
              科凌力智能，长期以医生诊疗为目标，围绕临床一线，展开智能产品的探索。在过去的20年时间里，科凌力坚持不懈，历经了医学人工智能从跌落谷底到强势回归的完整过程。我司主要经营诊疗系统、医学软件、临床医疗决策系统、全医学知识库决策引擎、家庭医生系统、教学实战系统等。
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-for="(item, index) in publicData" :key="index">
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
      this.publicData = this.$newsData.data().publicData
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
