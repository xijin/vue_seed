/**
 * @file ajax service
 * @author yanlingling
 */
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource);

var doRequest = function (path, param) {
   
    var ajaxCache = {};
    return new Promise(function (resolve, reject) {
        var cache = param.cache || false;
        // 可以提供一个cacheTime参数  来指定缓存数据多久
        var cacheTime = param.cacheTime;
        var cacheId = path + '--' + JSON.stringify(param);
        var cacheContent = ajaxCache[cacheId] || null;
        if (cacheContent) {
            var cachedData = cacheContent.content;
            var lastDataTime = cacheContent.getTime;
        }

        /**
         * ajax请求成功的回调
         * @param {Object} data 返回数据
         */
        function reqSuccess(data) {

            if (data.status == 200) {
                resolve(data);
            } else {
                reject(data);
            }
            if (data.status == 200) {
                param.successHandler && param.successHandler(data);
            } else if (data.status == 500) {
                if (param.failHandler) {
                    param.failHandler(data, data.error.message);
                }
            } else if (data.status == 700) {
                window.open('/ac/logout.json', '_self');
            } else if (data.status == 400 || data.status == 800) {
                if (param.failHandler) {
                    param.failHandler(data, data.error.message);
                } else {
                    console.log(data.error.message);
                }
            } else if (data.status == 300) {
                // 部分成功
                param.partSuccessHandler && param.partSuccessHandler(data);
            } else if (data.status == 0) { // 认为是302,刷新下页面
                window.location.reload();
            } else {
                alert('unkonwn error');
            }
        }

        function isDateFresh() {
            // 永久缓存
            if (!cacheTime) {
                return true;
            }
            var nowTime = new Date().getTime();
            // 失效
            if (nowTime - lastDataTime > cacheTime) {
                return false;
            }
            return true;

        };

        var isFresh = isDateFresh();

        if (cache && cachedData && isFresh) {
            reqSuccess(cachedData);
        } else {
            var instance = new Vue();
            Vue.http.post(path, param.data || {})
                .then(function (data) {
                    var body = data.body;
                    reqSuccess(body);
                    if (cache) {
                        // 缓存数据
                        ajaxCache[cacheId] = {
                            content: body,
                            getTime: new Date().getTime()
                        };
                    }
                }, function (error, status) {
                    if (status == 0) {
                        window.location.reload();
                        return;
                    }
                    alert('网络异常');
                });
        }

    });

}

export default  {

    /**
     * 发送请求
     * @param {string} path 请求的path
     * @param {Object} param 请求的参数
     */
    send: function (path, param) {
        return doRequest(path, param);
    },

    /**
     * 清空指定path的缓存
     * @param path
     */
    clearCache: function (path) {
        for (var key in ajaxCache) {
            if (key.indexOf(path) == 0) {
                ajaxCache[key] = null;
            }
        }
    }
};
