<template>
    <div class="video">
      <h1>{{content[ID].title}}</h1>
      <video :src="content[ID].src" width="970" height="500" autoplay controls="controls"></video>
      <div v-if="ID == 2" style="width:1000px;">
        <h2>{{content[ID].text.title}}</h2>
        <p>{{content[ID].text.info}}</p>
        <table cellpadding="0" cellspacing="0">
          <caption>{{content[ID].text.tableData.title}}</caption>
          <thead>
            <tr>
              <td v-for="(item, index) in content[ID].text.tableData.text.thead" :key="index">{{item}}</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in content[ID].text.tableData.text.tbody" :key="index">
              <td>{{item.td1}}</td>
              <td>{{item.td2}}
              <td>{{item.td3}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre v-else>{{content[ID].text}}</pre>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        "ID": 0,
        "content": [
          {
            "title": "嵌入式临床知识库",
            "text": '产品：嵌入式 临床智能引擎（to B 医院） \n + 临床引擎 → 智慧医院 \n 嵌入式 临床智能引擎技术，是基于知识库的医学人工智能高科技软件，具体实现方式是将医学知识库加临床决策软件产品（简称：产品、系统或知识库+临床决策），嵌入医院的HIS中运行。 \n 智慧医院 解决方案：运用人工智能技术，将复杂的医生临床思维过程，简化为可直观操作的扁平化知识集合，通过把医院产品嵌入HIS运行，以实现：\n1.无论门诊或住院，以多专科并行推导方式辅助医生临床诊疗，防范误诊、漏诊；\n2.通过内含诊疗常规的全医学知识库，起到临床实训作用，提高医生技能；\n3.自动记载医生临床操作（思维）过程，获得正逻辑病历记录；\n为医院电子病历评级事务提供优秀的知识库评级条件。' ,
            "src":require('../assets/movie/movie_0.mp4')
          },
          {
            "title": "基层医疗连锁系统",
            "text": "产品：基层医疗 临床智能辅助系统\n" +
            "工作对象：中小门诊部、社区卫生服务中心和站点、私人诊所、独立执业工作室、中医馆、单位医务室、乡镇卫生院、村卫生室等。\n" +
            "运营优势\n" +
            "三核一体：智能临床+智能管理+智能运营。\n" +
            "云端管理：利用云服务为各种层次的运营提供控制数据。\n" +
            "直通政府：为卫生行政管理部门提供各种监管数据。\n" +
            "解决基层医疗问题\n" +
            "1.一体化：基层医疗，临床+经营+管理，全过程数字一体化。\n" +
            "2.全医学：西医全科（8000病种）、中医全科、中西医结合，临床全覆盖，实现医生的一专多能。\n" +
            "3.规范化：知识库嵌入国家诊疗标准，系统执行规范的临床流程，自动生成电子病历。\n" +
            "4.少依赖：强化基层医生的个人作用，系统支持较多依赖经验判断，较少依赖大型设备。\n" +
            "5.轻投入：仅一个软件，即可架起基层医疗机构的全部功能，无论机构大小、人员多少。\n" +
            "6.伸缩性：可个人执业、可团队合作、可远程连锁。室内巩固医生平台，外面出诊方便携带。\n" +
            "7.留患者：同一患者、同一病种，不同变化，系统备有不同处理思路，扩展服务患者的能力。\n" +
            "通政府：全部临床工作与经营情况，都可方便向政府提交，既接受监控，又可作法律备询。",
            "src":require('../assets/movie/movie_1.mp4')
          },
          {
            "title": "全科智能辅助系统",
            "text": {
              "title": "产品：全科临床智能辅助系统",
              "info": "系统以多专科并行推导方式辅助医生临床诊疗，防范误诊、漏诊；通过内含诊疗常规的全医学知识库，起到临床实训作用，提高医生技能。",
              "tableData": {
                "title": "决策引擎 叠加功能",
                "text": {
                  "thead": ["", "决策引擎 叠加功能", "医生"],
                  "tbody": [
                    {
                      "td1": "性质",
                      "td2": "智能辅助+医生",
                      "td3": "医生个人"
                    },
                    {
                      "td1": "限制性",
                      "td2": "全医学本体+医生认知 (8000病、1200候证)",
                      "td3": "个人经验学识"
                    },
                    {
                      "td1": "思维特点",
                      "td2": "多专科并行搜索 (防漏诊误诊)",
                      "td3": "大脑搜索"
                    },
                    {
                      "td1": "思考逻辑",
                      "td2": "医学逻辑仿真+医生思维",
                      "td3": "个人逻辑思维"
                    },
                    {
                      "td1": "个性针对",
                      "td2": "有",
                      "td3": "有"
                    },
                    {
                      "td1": "诊疗过程",
                      "td2": "并行连续、辅助决策",
                      "td3": "个人判断"
                    },
                    {
                      "td1": "流程",
                      "td2": "严格的国家规定流程",
                      "td3": "条件性随意流程"
                    },
                    {
                      "td1": "资源来源",
                      "td2": "标准、教材、指南、经典",
                      "td3": "教材、经验"
                    },
                    {
                      "td1": "诊疗特征",
                      "td2": "循证协助+个性特征",
                      "td3": "个性特征"
                    },
                    {
                      "td1": "对症概率",
                      "td2": "条件明确、对症概率大",
                      "td3": "条件隐晦、选择性波动"
                    },
                    {
                      "td1": "增加工作",
                      "td2": "增加计算机操作，需要学习",
                      "td3": "不增加"
                    },
                    {
                      "td1": "易操作性",
                      "td2": "操作易习惯，习惯后更方便",
                      "td3": "不增加"
                    },
                    {
                      "td1": "文档",
                      "td2": "自动形成记录文档（病历）",
                      "td3": "手写记录"
                    }
                  ]
                }
              }
            },
            "src":require('../assets/movie/movie_2.mp4')
          },
          {
            "title": "智能分级诊疗平台",
            "text": '产品：智能分级诊疗平台\n' +
            '建设基于医学知识库的病种决策引擎，形成分级诊疗平台，提供移动终端，辅助基层医生从症状引导的病种筛查，自动/快速/准确完成首诊+分级+导诊等业务工作。\n' +
            '要点\n' +
            '构成：云端(分诊引擎)+手机端(移动分诊)。\n' +
            '价值：靠人工智能产生溢价。高门槛、可垄断。\n' +
            '要害：改变医患双向资源的入口与分配环节。\n' +
            '容量：基层医生: 178万+145万人，患者: 60亿人次。\n' +
            '解决痛点\n' +
            '1.建立分级诊疗制度的基础，在于“基层首诊”。\n' +
            '2.完成首诊之后，才能继续：①提供医疗服务+②分配医疗资源。\n' +
            '3.基层(网底)医生首诊的误诊率，据报道，或>80%。\n' +
            '4.缺乏好的“基层首诊”，既不能实现转诊，完成医疗资源分配；也不能留诊，提供本地医疗服务。',
            "src":require('../assets/movie/movie_3.mp4')
          },
          {
            "title": "博医理M-AI单病种",
            "text": "基层医生临床智能辅助系统（1350单病种）\n" +
            "业务目标：\n" +
            "为基层(网底)医生提供临床诊疗协助。系统通过步进式引导，逼近病种诊断，再对应中西医处置方法。若诊断需急救，则提示急救处置；若诊断超出本地能力，则进行分级诊疗，向上级医院转诊。整个思路围绕“强基层” 展开。\n" +
            "基层刚需： 政策规定医疗服务下沉，普遍提高基层医技服务水平的工具，就成为刚需。\n" +
            "平台构成： 云服务端(智能决策引擎)；移动终端(APP/PC端)。\n" +
            "平台服务： 辅助基层医生进行诊断、治疗、急救、分级、转诊、对接药店，网罗患者资源。",
            "src":require('../assets/movie/movie_4.mp4')
          }
        ]
      }
    },
    mounted () {
      this.ID = this.$route.query.id;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.video
  width 1200px
  margin 0 auto
  h1
    width 970px
    padding 20px 0 20px 0px
    text-align center
  h2
    margin-top 20px
  pre
    padding 30px
  line-height 30px
  table
    width 100%
    margin-top 20px
    border-left 1px solid #ccc
    border-top 1px solid #ccc
    caption
      font-weight bold
    thead
      font-weight bold
    tr
      td:first-child
        font-weight bold
      td
        text-align center
        border-right 1px solid #ccc
        border-bottom 1px solid #ccc

</style>
