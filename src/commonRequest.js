import ajaxService from "./common/utils/ajaxService"


export default {
    loginIn: function (params) {
        var params = params || {};
        return ajaxService.send('/manage/getAuth.json', {data: params});
    }
}