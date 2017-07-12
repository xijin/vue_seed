import moment from 'moment';
import commonConfig from '@/common/config/common.js';

export default {
    /**
     * daterange 插件默认值初始化
     * @return {[type]} [description]
     */
    getDatepickerOptions: function () {
        function clickHandler(duration, picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * duration);
            picker.$emit('pick', [start, end]);
        }

        return {
            shortcuts: [
                {
                    text: '最近一周',
                    onClick(picker) {
                        clickHandler(7, picker);
                    }
                }, 
                {
                    text: '最近一个月',
                    onClick(picker) {
                        clickHandler(30, picker)
                    }
                }, 
                {
                    text: '最近三个月',
                    onClick(picker) {
                        clickHandler(90, picker);
                    }
                }
            ]
        };
    },
    /**
     * date range插件开始时间，结束时间
     */
    getDateRange: function (dateRange) {
        var parseStr = commonConfig.DATE_STR.DATE;
        return [
            moment(dateRange[0]).format(parseStr), 
            moment(dateRange[1]).add(1, 'days').format(parseStr)
        ];
    },
    /**
     * 拼接初始化时间，今天
     * @param  {[type]} val [description]
     * @return {[type]}     [description]
     */
    intiDateRange: function () {

        var parseStr = commonConfig.DATE_STR.DATE;
        var startTime = moment().add(-10, 'days').hour(0).minute(0).seconds(0).toDate();
        var endTime = moment().hour(0).minute(0).seconds(0).toDate();
        
        return [startTime, endTime];
    }
}