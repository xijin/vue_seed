/**
 * @file 伪造ajax响应数据
 * @author mayue@baidu.com
 */
'user strict';
module.exports = function() {
    
    var mock = function(req, res, next) {
        if (!/.json$/.test(req.url)|| /hot-update/.test(req.url)) {
            next();
            return;
        }
        var path = req.url.lastIndexOf('?') > -1 
            ? req.url.substring(0, req.url.lastIndexOf('?')) : req.url;
        path = path.replace('.json', '.js');
        // console.log(path);
        path = path.indexOf('/') === 0 ? '../mock' + path : './mock/' + path;
        var mock = require(path);
        if (req.method === 'POST') {
            var content = '';
            req.on('data', function(data) {
                content += data;
            });

            req.on('end', function() {
                content = decodeURIComponent(content);
                // console.log(content);
                var allParams = content && content.split('&');
                console.log(allParams);
                // console.log(allParams);
                if (allParams && allParams.length) {
                    if (content.indexOf('params') >= 0) {
                        for (var i = 0; i < allParams.length; i++) {
                            if (allParams[i].indexOf('params') >= 0) {
                                var param = null;
                                if (allParams[i].length > 'params='.length) {
                                    var value = allParams[i].slice('params='.length);
                                    // console.log(value);
                                    if (value !== 'undefined') {
                                        param = JSON.parse(
                                            allParams[i].slice('params='.length)
                                        );
                                    }
                                }
                                // console.log(JSON.stringify(param));
                                res.end(
                                    JSON.stringify(
                                        mock ? mock.index(param) : {
                                            status: 500
                                        }
                                    )
                                );
                                break;
                            } else if (allParams[i].indexOf('data') >= 0) {
                                var param = null;
                                if (allParams[i].length > 'data='.length) {
                                    var value = allParams[i].slice('data='.length);
                                    if (value !== 'undefined') {
                                        param = JSON.parse(
                                            allParams[i].slice('data='.length)
                                        );
                                    }
                                }
                                res.end(
                                    JSON.stringify(
                                        mock ? mock.index(param) : {
                                            status: 500
                                        }
                                    )
                                );
                                break;
                            } 
                        } 
                    } else {
                        res.end(
                            JSON.stringify(
                                mock ? mock.index(param) : {
                                    status: 500
                                }
                            )
                        );
                    }
                } else {
                    res.end(JSON.stringify(mock ? mock.index() : { status: 500 }));
                }
                next();
            });
        } else {
            res.end(JSON.stringify(mock ? mock.index() : { status: 500 }));
            next();
        }
    };

    return mock;

};