exports.index = function (param) {
    var result = {
        status: 200,
        data: {
            "appId": "2",
            "cas.index": "https://test-cas.genshuixue.com/cas/logout"
        }
    }
    result.param = param;
    return result;
}