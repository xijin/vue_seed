/**
 * Created by zhanwentao on 05/09/2017.
 */
define(function (require) {
    'use strict';
    var exports = {};
    // var url = 'https://click.genshuixue.com/gs.gif';
    var url = 'https://my.genshuixue.com/gs.gif';
    var $ = require('jquery');
    /**
     * 统一上报
     */
    exports.send = function (params) {
        var img = new Image();

        $.extend(params, {
            timestamp: Date.now()
        });

        img.src = url + '?' + $.param(params);

        img.onload = img.onerror = img.onabort = function () {
            img = img.onload = img.onerror = img.onabort = null;
        };
    };

    function getParams(target, type) {
        var me = target;
        // 必输项
        var stype= me.data('habo-stype');
        if (stype === undefined) {
            return;
        }
        var paramsObj = {
            stype: stype,
            type: type
        };
        var userDefineParams = me.data('habo-params');
        if (userDefineParams) {
            var params = userDefineParams.split('|');
            params.forEach(function (v) {
                var item = v.split(':');
                if (item[0] === 'dom') {
                    var kv = item[1].split('=');
                    paramsObj[$.trim(kv[0])] = $(kv[1]).val();
                }
                else {
                    paramsObj[item[0]] = item[1];
                }
            });
        }
        return paramsObj;
    }

    /**
     * 统一habo上报
     *     1、class中有analysis-habo-log会统一上报；
     *     2、其中data-habo-type和data-habo-stype为必输项
     *     3、data-habo-params为其他自定义参数，格式为key:value|key:value|...
     *     例如：teacherNumber:123|teacherName:hr
     *     扩展：动态获取dom值结构：dom: key=xpath，通过$(xpath).val()获取，例如：dom #page_main .person_name
     */
    exports.initClick = function (type) {
        var me = this;
        
        $(document).ready(function () {
            $('body>*').on('click', '.analysis-habo-log', function (e){
                exports.send(getParams($(this), type));
            });
        });

    };

    /**
     * 统一habo上报
     *     1、class中有analysis-habo-log-scroll会统一上报；
     *     2、其中data-habo-type和data-habo-stype为必输项
     *     3、data-habo-params为其他自定义参数，格式为key:value|key:value|...
     *     例如：teacherNumber:123|teacherName:hr
     *     4、两次上报之间间隔1000ms
     */
    exports.initScroll = function () {
        var bodyHeight = $(document.body).height();
        var lastTime = new Date().getTime();
        function log() {
            var targets = $('.analysis-habo-log-scroll');
            var scrollTop = $(window).scrollTop();
            targets.each(function (i, v) {
                var me = $(v);
                var now = new Date().getTime();
                if (
                    now - lastTime > 1000
                    && scrollTop + bodyHeight > me.offset().top
                ) {
                    lastTime = now;
                    exports.send(getParams(me));
                }
            });
        }
        log();
        $(window).on('scroll.habo', log);
    };

    return exports.initClick;
});
