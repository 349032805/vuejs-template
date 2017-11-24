export function getWxLink() {
    let source_app = localStorage.source_app;
    let url;
    switch (source_app) {
        case "":
            url = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wzdai.xybt";
            break;
        case "xybt":
            url = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wzdai.xybt";
            break;
        case "sxdai":
            url = "http://a.app.qq.com/o/simple.jsp?pkgname=com.xybt.sxdai";
            break;
        default:
            url = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wzdai.xybt";
            break;
    }
    return url;
}