import http from '../axios'

export default {
  //获取所有需要的参数
  getAllParams() {
    return http('post', '/wzd/newh5/web/page/app-reg-two?source_tag=fqgj_02')
  },
  //判断手机号是否注册过
  isRegistered(paramObj) {
    return http('post', '/wzd/frontend/web/xqb-user/reg-get-code?clientType=wap', paramObj)
  },

  //提交表单
  commitForm(paramObj) {
    return http('post', '/wzd/frontend/web/xqb-user/register?appMarket=fqgj_02&clientType=wap', paramObj)
  },

  //尝试下载tag_apk
  tryTagAPK(tab_apk_url){
    return http('get',tab_apk_url)
  }

}