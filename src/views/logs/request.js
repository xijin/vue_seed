
import ajaxService from "@/common/utils/ajaxService";

export default {
    /**
     * 日志挂你-日志列表
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    list: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/logEvent/list.json', {data: params});
    }
}