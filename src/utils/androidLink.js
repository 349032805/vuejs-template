export function getAndroidLinkBox() {

    //先请求tag_apk,如果没有(返回错误),再请求dft_apk
    let box = {
        dft_apk: '',
        tag_apk: ''
    }
    let source_app = localStorage.source_app;
    let source_tag = localStorage.source_tag;
    let dft_apk;
    let tag_apk;

    if (source_app == 'xybt') { // 信用白条
        dft_apk = "http://qbres.wzdai.com/apk/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'hbqb') { // 汇邦钱包
        dft_apk = "http://qbres.wzdai.com/hbqb_apk/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/hbqb_apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'wzdai_loan') { // 温州贷借款
        dft_apk = "http://qbres.wzdai.com/wzdai_apk/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/wzdai_apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'xybt_fund') { // 信用白条公积金版
        dft_apk = "http://qbres.wzdai.com/xybt_fund_apk/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/xybt_fund_apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'xybt_fuli') { // 信用白条福利版
        dft_apk = "http://qbres.wzdai.com/xybt_fuli_apk/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/xybt_fuli_apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'sxdai') { // 随心贷
        dft_apk = "http://qbres.wzdai.com/sxdai_apk/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/sxdai_apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'xybt_xjbtfuli') {  //现金白条
        dft_apk = "http://qbres.wzdai.com/apk_xjbt_fuli/" + source_app + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/apk_xjbt_fuli/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app == 'xybt_professional') {  //信用白条专业版
        dft_apk = "http://qbres.wzdai.com/xybt_professional_apk/" + source_app + "-latest.apk"
        tag_apk = "http://qbres.wzdai.com/xybt_professional_apk/" + source_app + "-" + source_tag + ".apk";
    } else if (source_app = 'kxjie') { //开心借
        dft_apk = "http://qbres.wzdai.com/apk_kxj/" + source_app + "-latest.apk"
        tag_apk = "http://qbres.wzdai.com/apk_kxj/" + source_app + "-" + source_tag + ".apk";
    }

    box.dft_apk = dft_apk;
    box.tag_apk = tag_apk;

    return box;
}