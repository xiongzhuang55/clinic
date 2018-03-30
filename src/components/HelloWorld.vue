<template>
  <div class="content-wrapper">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item, index) in bannerItems" :key="index">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
    <horize></horize>
    <div class="content product-wrapper">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple ">
            <h1>{{titleItems[0].title}}</h1>
            <div class="horize"></div>
            <p>{{titleItems[0].text}}</p>
          </div>
        </el-col>
        <el-col :span="8" v-for="(item, index) in proImages" :key="index">
          <router-link :to="{path:'/video',name:'Video',query:{id:index}}">
            <div class="grid-content bg-purple">
              <img :src="item.src" alt="">
              <div class="title">
                <div class="line"></div>
                <div class="text">{{item.text}}</div>
                <div class="line"></div>
              </div>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <horize></horize>
    <div id="tec-wrapper" class="content tec-wrapper">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-row :gutter="20" class="four">
            <el-col :span="6" v-for="(item, index) in tecItems.four" :key="index">
              <img :src="item.src" alt="">
              <p>{{item.text}}</p>
            </el-col>
          </el-row>
          <div class="content-text">
            <span>{{tecItems.two[0].title}}</span>
            <span>{{tecItems.two[0].text}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple ">
            <h1>{{titleItems[1].title}}</h1>
            <div class="horize"></div>
            <p>{{titleItems[1].text.tec}}</p>
            <ol v-for="(item, index) in titleItems[1].text.tecTxt" :key="index">
              <li>{{item}}</li>
            </ol>
          </div>
        </el-col>
      </el-row>
      <div class="horize"></div>
      <el-row :gutter="30">
        <el-col :span="4.8" v-for="(item, index) in tecItems.five" :key="index">
          <img :src="item.url" alt="">
        </el-col>
      </el-row>
      <div class="content-text">
        <span>{{tecItems.two[1].title}}</span>
        <span>{{tecItems.two[1].text}}</span>
      </div>
    </div>
    <horize></horize>
    <div id="classic-wrapper" class="content classic-wrapper">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple ">
            <h1>{{titleItems[2].title}}</h1>
            <div class="horize"></div>
            <p>{{titleItems[2].text}}</p>
          </div>
        </el-col>
        <el-col v-show="item.type < 6" :class="{classicSlide:(item.type>5)}" :span="8" v-for="(item, index) in classicImages" :key="index">
          <div class="grid-content bg-purple class-img">
            <img :src="item.src" alt="" height="170">
          </div>
        </el-col>
      </el-row>
      <el-row style="text-align: center">
        <el-button round @click="toggle1">点击查看更多</el-button>
      </el-row>
    </div>
    <horize></horize>
    <div class="content news-wrapper">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-row v-show="item.type < 4" :class="{newsSlide:(item.type > 3)}" class="news-content" :gutter="20" v-for="(item, index) in news" :key="index">
            <el-col :span="6">
              <img :src="item.src" alt="">
            </el-col>
            <el-col :span="18">
              <h3>{{item.title}}</h3>
              <p>{{item.time}}</p>
              <p>{{item.text}}
                <router-link :to="{path:'/news',name:'News',query:{id:index}}">
                  <a href="#">阅读更多</a>
                </router-link>
              </p>
            </el-col>
          </el-row>
          <el-row style="text-align: center">
            <el-button round @click="toggle2">点击查看更多</el-button>
          </el-row>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple ">
            <h1>{{titleItems[3].title}}</h1>
            <div class="horize"></div>
            <p>{{titleItems[3].text}}</p>
            <p style="text-align: right">{{titleItems[3].text1}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <horize></horize>
    <div class="content about-wrapper">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-purple ">
            <h1>{{titleItems[4].title}}</h1>
            <div class="horize"></div>
            <p>{{titleItems[4].text}}</p>
          </div>
        </el-col>
        <el-col :span="14">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in aboutItems" :key="index" class="text-center">
              <router-link :to="{path:'/'+item.url}">
                <div :class="classAbout[index]"></div>
                <p>{{item.title}}</p>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <horize></horize>
    <div class="content us-wrapper">
      <el-row :gutter="20">
        <el-col :span="14">
          <div class="map">
            <div id="map-container" tabindex="0"></div>
            <div id='panel'></div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple ">
            <h1>{{titleItems[5].title}}</h1>
            <div class="horize"></div>
            <p>{{titleItems[5].text}}</p>
          </div>
          <h3>{{usItems.title}}</h3>
          <ol>
            <li :class="classMap[index]" v-for="(item, index) in usItems.info" :key="index">
              <pre>{{item.text}}</pre>
            </li>
          </ol>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import horize from '../components/horize'
export default {
  name: 'HelloWorld',
  components: {
    horize
  },
  data () {
    return {
      "logo":require('../assets/images/logo.png'),
      "bannerItems": [
        {
          'url': require('../assets/images/banner_1.png'),
          'type': ''
        },
        {
          'url': require('../assets/images/banner_2.png'),
          'type': ''
        },
        {
          'url': require('../assets/images/banner_3.png'),
          'type': ''
        }
      ],
      "titleItems": [
        {
          'title': '产品介绍',
          'text': '科凌力智能，长期以医生诊疗为目标，围绕临床一线，展开智能产品的探索。在过去的20年时间里，科凌力坚持不懈，历经了医学人工智能从跌落谷底到强势回归的完整过程，也完成了如下产品的研发：'
        },
        {
          'title': '技术支持',
          'text': {
            'tec': '前端驱动 临床思维仿真',
            'tecTxt': ['1.知识库是人脑知识框架的外化。', '2.框架是既有集合；临床无创新，要义是稳定与通变。', '3.利用机器知识框架去仿真采集、描述、判断、选择患者病情，形成一条医生临床的自主路线。']
          }
        },
        {
          'title': '经典案例',
          'text': '20年来，我们共研发以临床决策知识库为核心的4个项目，囊括院前、院中、院后等范围。项目均利用人工智能创造服务价值，市场对象主要有：各级医院、基层医疗机构、网底医疗机构、临床医生等。'
        },
        {
          'title': '行业新闻',
          'text': '“以人民为中心，以健康为根本”、“要推动医疗资源下沉”、“让全体中国人享有更高水平的医疗服务”、“没有全民健康就没有全面小康”、“把人民健康放在优先发展战略地位”、“健康是促进人的全面发展的必要要求”、“为人民群众提供全生命周期的卫生与健康服务”、“要着力推进基本医疗卫生制度建设，努力在分级诊疗制度...等5项基本医疗卫生制度建设上取得突破',
          'text1': '——习近平'
        },
        {
          'title': '关于我们',
          'text': '九十年代中期，医学人工智能在世界范围内全面沉入谷底，彼时，只有科凌力智能逆流而上，欲拼一己之力将其重新托出水面，在基于‘全医学体系知识库决策引擎’的研发过程中逐步成长起来。十多年过去了，科凌力智能终于等到了人工智能(AlphaGo)时代的回归。科凌力智能拥有从线性工具到非线性过程的理论研究，成就了能够仿真临床思维、惠及广大民众的医学软件，目前，公司在‘医学人工智能’的理论和技术领域内都处于一个遥遥领先的位置。'
        },
        {
          'title': '关于我们',
          'text': '加入我们，请联系行政彭小姐；业务咨询，请联系业务吴小姐。欢迎合作！\n' + '合作方式：股权融资、市场营销、运营合作、医院项目、区域医疗项目、健康产业项目、大数据课题委托开发等。\n' +  '合作形式：新技术、新思路、新产品，合作形式不拘。'
        }
      ],
      "proImages": [
        {
          "src": require('../assets/images/product_1.png'),
          "text": '嵌入式临床知识库'
        },
        {
          "src": require('../assets/images/product_2.png'),
          "text": '基层医疗连锁系统'
        },
        {
          "src": require('../assets/images/product_3.png'),
          "text": '全科智能辅助系统'
        },
        {
          "src": require('../assets/images/product_4.png'),
          "text": '智能分级诊疗平台'
        },
        {
          "src": require('../assets/images/product_5.png'),
          "text": '博医理M-AI单病种'
        }
      ],
      "tecItems": {
        'two':[
          {
            'title':'内容：',
            'text':'18个字典。其中：综合病情要素9432条、西医病名（63专科）8923条、西药4529条、临床处置（手术、专科处置、介入、心理、康复等）4436条、中医证名1415条、中西医结合（西医病名+中医证名+中医方剂）10338条、中草药826条，等等。基于字典，建构形成293万个知识结点的结点池，涵盖：西医、中医、中西医结合，以追随描述与辅助决策个性化临床诊疗。'
          },
          {
            'title':'内容：',
            'text':'技术对手：IBM Watson逐步中国临床，是属正面对手。但从Watson解决问题的流程看：①使用者提出一个搜索问题，②用搜索引擎搜索大型文档，③将搜索结果生成可能的解答，④所以假设转换为答案列表，返回；可见Watson的智慧是基于搜索策略、大型数据库，是后端驱动。我们科凌力智能，是基于医生思维仿真策略，利用嵌入规则的语义知识库引擎，属前端驱动。Watson与科凌力智能不在同一个层面上竞争，它不适应基层市场。'
          }
        ],
        'four':[
          {
            'src':require('../assets/images/tec_1.png'),
            'text':'18个字典'
          },
          {
            'src':require('../assets/images/tec_2.png'),
            'text':'综合病情要素9432条'
          },
          {
            'src':require('../assets/images/tec_3.png'),
            'text':'西医63专科8923条'
          },
          {
            'src':require('../assets/images/tec_4.png'),
            'text':'中西医结合10338条'
          }
        ],
        'five':[
          {
            'src':require('../assets/images/tec_5.png')
          },
          {
            'src':require('../assets/images/tec_6.png')
          },
          {
            'src':require('../assets/images/tec_7.png')
          },
          {
            'src':require('../assets/images/tec_8.png')
          },
          {
            'src':require('../assets/images/tec_9.png')
          }
        ]
      },
      "classicImages":[
        {
          "type": 1,
          "src": require('../assets/images/classic_1.png'),
        },
        {
          "type": 2,
          "src": require('../assets/images/classic_2.png'),
        },
        {
          "type": 3,
          "src": require('../assets/images/classic_3.png'),
        },
        {
          "type": 4,
          "src": require('../assets/images/classic_4.png')
        },
        {
          "type": 5,
          "src": require('../assets/images/classic_5.png')
        },
        {
          "type": 6,
          "src": require('../assets/images/classic_1.png')
        },
        {
          "type": 7,
          "src": require('../assets/images/classic_3.png')
        },
        {
          "type": 8,
          "src": require('../assets/images/classic_4.png')
        }
      ],
      "news": [
        {
          type: 1,
          title: '《分级诊疗改革是医改的重中之重》',
          time: '2016-5-5 来源:中国青年报',
          text: '近日，笔者在阳泉市采访时，该市第三人民医院的一位大夫讲了这么一件事：去年的一天傍晚，大阳泉村一村民突发心脑血管疾病，被家属直接拉进离居住地仅几分钟车程的该院急救室抢救，由于抢救及时，病人在慢慢恢复后出院 . . . . . .',
          src: require('../assets/images/news_1.png')
        },
        {
          type: 2,
          title: '《分级诊疗莫忘生命至上》',
          time: '2016-10-11 来源:山西经济日报',
          text: '近日，笔者在阳泉市采访时，该市第三人民医院的一位大夫讲了这么一件事：去年的一天傍晚，大阳泉村一村民突发心脑血管疾病，被家属直接拉进离居住地仅几分钟车程的该院急救室抢救，由于抢救及时，病人在慢慢恢复后出院 . . . . . .',
          src: require('../assets/images/news_2.png')
        },
        {
          type: 3,
          title: '《分级诊疗制度为基层医疗机构带来发展机遇》',
          time: '2015年05月04日 来源:人民网',
          text: '通过推行分级诊疗制度，将大中型医院承担的一般门诊、康复和护理等分流到基层医疗机构，形成“健康进家庭、小病在基层、大病到医院、康复回基层”的新格局是医改的一项重要任务。近日，在第二届中国县域卫生发展论坛上，专家指出 . . . . . .',
          src: require('../assets/images/news_3.png')
        },
        {
          type: 4,
          title: '《人工智能将在这5个方向触发医疗变革》',
          time: '2016-09-27 来源:微信公众号健康邦',
          text: '人工智能还是一个“小朋友”，如果说人工智能在医学方面有一位冉冉升起的新星的话，那一定是德克萨斯大学的副校长和首席创新官LyndaChin博士。她说：“人类的大脑受到容量的限制，而医学也因为越来越多的患者数据和 . . . . . . ',
          src: require('../assets/images/news_4.png')
        },
        {
          type: 5,
          title: '《AI在健康医疗领域的应用比重逐渐上升》',
          time: '2016-10-09 来源:每日科技网',
          text: '上月微软宣布将AI用于医疗健康的计划Hanover，他们试图帮助寻找最有效的药物和治疗方案.。除此之外，微软还在研究模拟癌症如何在不同病人身体里扩散，甚至于研究像计算机编程一样创造生物细胞等。整个初创圈最热门的话题 . . . . . . ',
          src: require('../assets/images/news_5.png')
        },
        {
          type: 6,
          title: '《分级诊疗：让就医首选基层》',
          time: '2016-10-10 来源:青岛全搜索电子报',
          text: '大医院人满为患，一床难求。与此形成鲜明对比的是，有些基层医院、社区卫生服务中心门庭冷落。大医院专家在忙着看头疼脑热的“基层病”，而基层医院、社区卫生服务站的医生因“无病可看”被闲置，这“一热一冷”凸显了医疗 . . . . . . ',
          src: require('../assets/images/news_6.png')
        }
      ],
      "aboutItems":[
        {
          "title": "公司简介",
          "url": "company"
        },
        {
          "title": "企业荣誉",
          "url": "honor"
        },
        {
          "title": "企业愿景",
          "url": "vision"
        },
        {
          "title": "企业宣传",
          "url": "propagate"
        }
      ],
      "usItems":{
        title: '科凌力智能医学软件(深圳)有限公司',
        info:[
          {
            src: require('../assets/images/address.png'),
            text: '深圳市-龙华区-清湖清祥路1号-宝能科技园-9栋C座14楼1411单元'
          },
          {
            src: require('../assets/images/phone.png'),
            text: '0755-83792371(行政)13392833473(业务)'
          },
          {
            src: require('../assets/images/email.png'),
            text: 'clinixoft@126.com(行政) \n 504483904@qq.com(业务)'
          },
          {
            src: require('../assets/images/website.png'),
            text: 'www.cliniai.com'
          }
        ]
      }
    }
  },
  created () {
    this.classMap = ['address', 'phone', 'email', 'website'];
    this.classAbout = ['about_1', 'about_2', 'about_3', 'about_4'];
//    this.$http.get('/api/seller').then((response) => {
//      response = response.body;
//      if (response.errno === ERR_OK) {
//        this.seller = response.data;
//      }
//    });
  },
  mounted () {
    var logo = this.logo;
    var defaultLayer = new AMap.TileLayer({textIndex:15});
    var traffic = new AMap.TileLayer.Traffic();
    var map = new AMap.Map('map-container',{
      resizeEnable: true,
      zoom: 16,//3-18的数字
      layers: [
        defaultLayer,//默认图层
        traffic,//实时交通图层
        new AMap.Buildings()
      ],
      center: [114.0642973694, 22.6742177387]
    });
    //创建锚点
    var marker = new AMap.Marker({
      position: [114.0642973694, 22.6742177387]
    });
    marker.setMap(map);
    map.on('click',function(e){
      infowindow.open(map,[114.0642973694, 22.6742177387]);
    })
    //信息窗体
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
      var infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title" style="color:#fff;background:rgba(0,155,255,0.8);padding-left:6px">科凌力智能医学软件(深圳)有限公司</div><div style="padding:4px;color:#666;line-height:23px;font-size:12px">'+
        '<img src='+logo+' width="80px" height="30px" style="float: left;margin-right:5px">'+
        '公司简介：<br/>电话：0755-83792371&nbsp;&nbsp邮编：518100<br/>地址：深圳市-龙华区-清湖清祥路1号-宝能科技园-9栋C座14楼1411单元。'+
        '</div>',
        offset: new AMap.Pixel(0, -30)
      });
      infowindow.open(map,[114.0642973694, 22.6742177387]);
    })
  },
  methods: {
    toggle1 (e) {
      $('.classicSlide').slideToggle()
      if (e.target.innerText === "点击查看更多"){
        e.target.innerText = '点击收起'
      }else{
        e.target.innerText = '点击查看更多'
      }
    },
    toggle2 (e) {
      $('.newsSlide').slideToggle()
      if (e.target.innerText === "点击查看更多"){
        e.target.innerText = '点击收起'
      }else{
        e.target.innerText = '点击查看更多'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/mixi.styl";
  @import "../common/css/animate.min.css";
  .backBg($url)
    background-image url($url)
    background-position center
    width 145px
    height 145px
.content-wrapper
  line-height 30px
  .content
    width 1200px
    margin 0px auto
    .horize
      margin 20px 0
      border-bottom 2px solid #ccc
    .horize+p
      line-height 30px
      color #000
      text-indent 32px
  .product-wrapper
    .title
      display flex
      margin 20px auto 20px auto
      .line
        flex 1
        position relative
        top -15px
        border-bottom 1px solid #ccc
      .text
        padding 0px 12px
  .tec-wrapper
    .horize+p
      text-indent 0
      font-size 18px
    ol
      li
        padding 5px 0
        line-height 30px
        color-profile #000
    .four
      .el-col
        text-align center
        p
          margin-top 10px
    .content-text
      padding 20px 0
      font-size 14px
      span:first-child
        font-weight bold
    .horize
      margin 20px 0px
      border-bottom 1px solid #ccc
  .classic-wrapper
    .class-img
      margin-bottom 30px
  .news-wrapper
    .hide
      display none
      &.silde-fade-enter-active, &.silde-fade-leave-active
        transition: all 0.5s
      &.silde-fade-enter, &.silde-fade-leave-to
         opacity: 0
    .el-button
      margin 0px auto
    .news-content
      margin-bottom 20px
      p
        font-size:14px
      p:last-child
        margin-top 10px
      a
        color #1682bf
  .about-wrapper
    .text-center
      div
        width 145px
        height 145px
        margin-bottom 20px
      .about_1
        background "../assets/images/about_1.png" no-repeat center
        &:hover
          background "../assets/images/about_11.png" no-repeat center
      .about_2
        background "../assets/images/about_2.png" no-repeat center
        &:hover
          background "../assets/images/about_22.png" no-repeat center
      .about_3
        background "../assets/images/about_3.png" no-repeat center
        &:hover
          background "../assets/images/about_33.png" no-repeat center
      .about_4
        background "../assets/images/about_4.png" no-repeat center
        &:hover
          background "../assets/images/about_44.png" no-repeat center
  .us-wrapper
    .map
      width 670px
      height 520px
      border 1px solid #00ace9
      padding 0px
      #map-container
        height 100%
    h3
      margin 30px 0px 10px 0
    ol
      li
        margin-bottom 10px
        padding-left 30px
        &.address
          background ('../assets/images/address.png') no-repeat left
          background-position left
        &.phone
          background ('../assets/images/phone.png') no-repeat left
          background-position left
        &.email
          background ('../assets/images/email.png') no-repeat left
          background-position left
        &.website
          background ('../assets/images/website.png') no-repeat left
          background-position left
        pre
          display inline-block
          font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif
</style>
