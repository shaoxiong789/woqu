<template>
  <div class="wqFrame-nav">
        <div class="wqFrame-logo">
            <h1>
                <i class="wqmenu-wqlogo"></i>
            </h1>
        </div>
        <ul class="wqFrame-header-menu wqFrame-menuLeft pull-left">
                            <li class="wqFrame-navItem">
                    <a href="https://kq.woqu365.com/people/index.htm" class="external  current ">首页</a>
                </li>
                            <li class="wqFrame-navItem">
                    <a href="https://hmc.woqu365.com/company/info.htm" class="external ">配置</a>
                </li>
                            <li class="wqFrame-navItem">
                    <a href="https://hmc.woqu365.com/paidLeave/list.htm" class="external ">人事</a>
                </li>
                            <li class="wqFrame-navItem">
                    <a href="https://xz.woqu365.com/admin/home.htm" class="external ">薪酬</a>
                </li>
                            <li class="wqFrame-navItem">
                    <a href="https://kq.woqu365.com/admin/applyindex.htm#/apply" class="external ">审批</a>
                </li>
                            <li class="wqFrame-navItem">
                    <a href="https://kq.woqu365.com/admin/appsindex.htm#/reportTemplate" class="external ">应用</a>
                </li>
                    </ul>
        <ul class="header-menu wqFrame-menuRight pull-right">
            <li class="wqFrame-navItem wqFrame-currentCompany">
                <span class="wqFrame-companyVersion hide"></span>
                <a class="external fn-current-name" href="javascript: void(0);" title="上海喔趣信息科技有限公司">上海喔趣信息科技有限公司</a>
            </li>
            <li class="wqFrame-navItem wqFrame-service-section" id="customer-show">
                <a class="external" href="javascript: void(0);">
                    <i class="nav-icon wqmenu-customerService"></i>
                </a>
                                <div class="wqFrame-customerService-container" id="customer-info">
                    <div class="wqFrame-customerServic-Content" style="">
                        <div class="wqFrame-customerServic-normalService">
                            <div class="wqFrame-customerServic-title">客服热线</div>
                            <div class="wqFrame-customerServic-Phonenum">400-966-7200</div>
                            <div class="wqFrame-customerServic-Time">周一至周五09:00-18:00</div>
                            <a class="wqFrame-customerService-online external" href="javascript: void(0);">
                                <i class="service-section-btn-icon wqmenu-qqicon"></i>
                                <div class="service-section-btn-title">在线客服</div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="wqFrame-navItem">
                <a class="external" href="https://kq.woqu365.com/login/logout.htm" title="退出">
                    <i class="nav-icon wqmenu-exit"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus">
body.woqu .wqFrame .wqFrame-logo h1{
  vertical-align: middle;
}
.wqFrame .wqFrame-navItem a .nav-icon{
  vertical-align: initial;
}
</style>
