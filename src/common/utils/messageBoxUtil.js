export default {
    /**
     * 确认和取消对话框
     * @param  {[type]} context [description]
     * @param  {[type]} options [description]
     * @param  {[type]} succ    [description]
     * @param  {[type]} fail    [description]
     * @return {[type]}         [description]
     */
    comfirm: function (context, options) {
        
        if (options == options + '') {
            options = {
                msg: options
            };
        }

        var config = {
            msg: options.msg || '是否继续操作？',
            title: options.title || '提示',
            confirm: options.confirm || '确定',
            cancel: options.cancel || '取消',
            type: options.type || 'warn', // success/info/warning/error
        };
        var that = context;
       return  that.$confirm(
            config.msg, 
            config.title, 
            {
                confirmButtonText: config.confirm,
                cancelButtonText: config.cancel,
                type: config.type
            }
        );

    },
    showMessage: function (context, msg, succ) {
        context.$alert(msg, '提示', {
          confirmButtonText: '确定',
          callback: succ
        });
    }
}