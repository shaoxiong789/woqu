<template>
    <div class="newHome">
        <div class="newHome-leftPanel" v-if="infos">
            <div class="newHome-leftPanel-hd">
                <div class="newHome-leftPanel-hdInfo" id="fn-emp-info">
                    <div class="newHome-leftPanel-hdHead">
                        <img class="fn-emp-profile" src="https://cdnstyle.woqukaoqin.com/style/src/image/public/user2.png" alt="丁少雄">
                    </div>
                    <div class="fn-emp-name text-center newHome-leftPanel-empName" :title="infos.emp.name">{{infos.emp.name}}</div>
                    <div class="fn-emp-position text-center newHome-leftPanel-empPosition" :title="infos.emp.position">{{infos.emp.position}}</div>
                </div>
            </div>
            <div class="newHome-leftPanel-bd">
                <ul class="newHome-leftPanel-bd-hd">
                    <li class="newHome-leftPanel-bdSwitch fn-switchCompany" data-toggle="modal" data-target="#switchCompany">
                        <div class="newHome-leftPanel-bdCompanyName newHome-leftPanel-bdTitle fn-companyName" :title="infos.company.name">{{infos.company.name}}</div>
                        <div class="nh-qiehuan newHome-leftPanel-switchIcon"></div>
                    </li>
                </ul>
                <ul class="newHome-leftPanel-bd-bd">
                    <li class="clearfix">
                        <div class="newHome-leftPanel-bd-title pull-left">手机号码</div>
                        <div class="newHome-leftPanel-bd-subtitle pull-right">17602559155</div>
                    </li>
                    <li class="clearfix">
                        <div class="newHome-leftPanel-bd-title pull-left">入职时间</div>
                        <div class="newHome-leftPanel-bd-subtitle pull-right">2018-06-11</div>
                    </li>
                </ul>
                <ul class="newHome-leftPanel-bd-ft"></ul>
            </div>
        </div>
        <div class="newHome-rightPanel">
            <div class="newHome-rightPanel-hd clearfix">
                <dl class="newHome-rightPanel-timeInfo clearfix pull-left"> <dt class="newHome-rightPanel-day pull-left">15</dt>

                    <dd class="pull-left">
                        <div class="newHome-rightPanel-week">星期五</div>
                        <div class="newHome-rightPanel-month">2018年6月</div>
                    </dd>
                </dl>
                <div class="newHome-rightPanel-soup">下班了，精彩的私生活即将开始</div>
            </div>
            <div class="newHome-rightPanel-bd">
                <ul class="newHome-rightPanel-bd-iconWrap clearfix">
                    <li class="newHome-rightPanel-bd-iconItem">
                        <a href="https://xz.woqu365.com/member/p4c.htm">
                            <div class="nh-gongzitiao newHome-rightPanel-bd-icon text-center"></div>
                            <div class="newHome-rightPanel-bd-iconTitle text-center">工资条</div>
                        </a>
                    </li>
                    <li class="newHome-rightPanel-bd-iconItem">
                        <a href="https://kq.woqu365.com/admin/appsindex.htm#/reportTemplate">
                            <div class="nh-gongzuohuibao newHome-rightPanel-bd-icon text-center"></div>
                            <div class="newHome-rightPanel-bd-iconTitle text-center">工作汇报</div>
                        </a>
                    </li>
                    <li class="newHome-rightPanel-bd-iconItem">
                        <a href="https://hmc.woqu365.com/filehub/folderList.htm">
                            <div class="nh-wangpan newHome-rightPanel-bd-icon text-center"></div>
                            <div class="newHome-rightPanel-bd-iconTitle text-center">网盘</div>
                        </a>
                    </li>
                    <li class="newHome-rightPanel-bd-iconItem">
                        <a href="https://kq.woqu365.com/admin/appsindex.htm#/bulletin">
                            <div class="nh-gonggao newHome-rightPanel-bd-icon text-center"></div>
                            <div class="newHome-rightPanel-bd-iconTitle text-center">公告</div>
                        </a>
                    </li>
                    <li class="newHome-rightPanel-bd-iconItem">
                        <a href="https://kq.woqu365.com/admin/appsindex.htm#/legworkReport">
                            <div class="nh-waiqin newHome-rightPanel-bd-icon text-center"></div>
                            <div class="newHome-rightPanel-bd-iconTitle text-center">外勤</div>
                        </a>
                    </li>
                    <li class="newHome-rightPanel-bd-iconItem">
                        <a href="https://kq.woqu365.com/admin/scoreindex.htm#/zcScore">
                            <div class="nh-jifen newHome-rightPanel-bd-icon text-center"></div>
                            <div class="newHome-rightPanel-bd-iconTitle text-center">计分</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '../http.js'
export default {
  name: '',
  data () {
    return {
      infos: undefined
    }
  },
  mounted () {
    axios({
      method: 'post',
      url: '/common/base/infos.htm'
    }).then(({data = {}}) => {
      this.infos = data
    })
  }
}
</script>
