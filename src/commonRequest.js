import ajaxService from "./common/utils/ajaxService"


export default {
    loginIn: function (params) {
        var params = params || {};
        return ajaxService.send('/ac/getAuth.json', {data: params});
    },
    getSelectInfo: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/account/appInfo.json', {data: params});
    },
}