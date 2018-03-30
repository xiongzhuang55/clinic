<template>
    <div class="about-div">
      <img-div></img-div>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/images/wawa.png" alt="">
        </el-col>
        <el-col :span="18">
          <div>
            <h2>我们的荣誉</h2>
            <pre><span>{{honorData}}</span></pre>
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
        "publicData":'',
        "honorData": '事件决策知识库组建方法及相应的事件决策方法和系统(专利申请号为200610060****)\n' +
        '循证医学数据库组建方法及相关的循证医学疾病诊断方法(专利申请号为2007100****6.8)\n' +
        '科凌力医宝自助式远程诊疗系统，简称：科凌力网络医宝(著作权登记号为 RS1****)\n' +
        '科凌力医宝手触式诊疗系统，简称：科凌力手触医宝(著作权登记号为 RS1****)\n' +
        '科凌力嵌入式全医学知识库决策构件(著作权登记号为2006SR1****)\n' +
        '科凌力医宝（网络）智能化临床咨询系统(著作权登记号为2006SR1****)\n' +
        '科凌力医宝（单机）智能化临床诊疗系统(著作权登记号为2006SR1****)\n' +
        '科凌力医宝智能化网上医院系统(著作权登记号为2006SR****)\n' +
        '科凌力临床医学决策软件 [简称CliniCAD](著作权登记号为2004SR0****)\n' +
        '幸林中医临床辅助软件V2000 [简称TCMware](著作权登记号为2001SR****)\n' +
        '2001年幸林中医临床辅助软件在南京通过中国中医诊断专业委员会主持的成果鉴定。\n' +
        '深圳市高新技术产业协会会员单位，荣获《深圳市高新技术企业》\n' +
        '荣获《第九届中国国际高新技术成果交易会拥有自主知识产权证书》'
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
