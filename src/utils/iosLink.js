export function getiOSLink() {
    let source_app = localStorage.source_app;
    let url;
    if (source_app == "xybt") {
        url = "http://itunes.apple.com/app/id1221186366?mt=8"; // 信用白条
    } else if (source_app == "hbqb") {
        url = "http://itunes.apple.com/app/id1221186366?mt=8"; // 汇邦钱包
    } else if (source_app == "wzdai_loan") {
        url = "http://itunes.apple.com/app/id1239756949"; // 温州贷借款
    } else if (source_app == "xybt_fund") {
        url = "http://itunes.apple.com/app/id1248726833?mt=8"; // 信用白条公积金版
    } else if (source_app == "xybt_fuli") {
        url = "http://itunes.apple.com/app/id1235438496?mt=8"; // 信用白条福利版
    } else if (source_app == "sxdai") {
        url = "http://itunes.apple.com/app/id1251292028?mt=8"; // 随心贷
    } else if (source_app == "xybt_xjbtfuli") {
        url = "http://itunes.apple.com/app/id1264533569?mt=8"; //现金白条
    } else if (source_app == "xybt_professional") {
        url = "http://itunes.apple.com/app/id1264536816?mt=8"; //信用白条专业版
    } else if (source_app == "kxjie") {
        url = "http://itunes.apple.com/app/id1278230923?mt=8"; //开心借
    }
    return url;
}