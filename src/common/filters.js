'use strict';
import Vue from 'vue';
import moment from 'moment';

import commonConfig from '@/common/config/common.js';

/**
 * 判断是否为空
 * @param val
 */
function isEmpty(val) {
    return (typeof val === 'undefined' || val === null || val === '');
}

Vue.filter('transEmpty', function (value) {
    return isEmpty(value) ? '--' : value;

});

/**
 * 将数值以三位分开
 */
Vue.filter('numSplit', function (value) {
    if (isEmpty(value)) {
        return '--'
    }
    var str = value.toString();
    var integerPart = str.split('.')[0];
    var decimalPart = str.split('.')[1];
    var processedIntegerPart;//处理后的整数部分
    //处理整数部分
    if (integerPart[0] == '-' || integerPart[0] == '－') {
        integerPart = integerPart.substr(1);//去除负号
        processedIntegerPart = integerPart.split('').reverse().join('')
            .replace(/(\d{3})/g, '$1,').replace(/\,$/, '')
            .split('').reverse().join('');
        processedIntegerPart = '-'.concat(processedIntegerPart);
    } else {
        processedIntegerPart = integerPart.split('').reverse().join('')
            .replace(/(\d{3})/g, '$1,').replace(/\,$/, '')
            .split('').reverse().join('');
    }
    //衔接小数部分
    if (decimalPart) {
        return processedIntegerPart.concat('.', decimalPart);
    } else {
        return processedIntegerPart;
    }
});

// 把无效数据处理为0
Vue.filter('transZero', function (value) {
    return isEmpty(value) ? '--' : value;

});

// 金额 / 100
Vue.filter('transAmount', function (value) {
    return isEmpty(value) ? '0' : value / 100;

});

// 日期格式化
Vue.filter('dateTrans', function (value) {
    if (isEmpty(value)) {
        return '--';
    }
    
    if (!value) {
        return '--';
    }

    return moment(value).format('YYYY-MM-DD');

});

// 精确到分的日期格式化
Vue.filter('accurateDateTrans', function (value) {
    if (isEmpty(value)) {
        return '--';
    }
    
    if (!value) {
        return '--';
    }

    return moment(value).format('YYYY-MM-DD HH:mm');

});

// 精确到秒的日期格式化
Vue.filter('dateTimeTrans', function (value) {
    if (isEmpty(value)) {
        return '--';
    }
    
    if (!value) {
        return '--';
    }

    return moment(value).format('YYYY-MM-DD HH:mm:ss');

});

// 时间长度转换
Vue.filter('hourTrans', function (value) {
    if (isEmpty(value)) {
        return '--';
    }

    var hour = value / 60;
    return hour.toFixed(1) + 'h';

});

// 时间长度转换
Vue.filter('hourTrans', function (value) {
    if (isEmpty(value)) {
        return '--';
    }
    
    var hour = value / 60;
    return hour.toFixed(1) + 'h';

});

/**
 * 状态转换
 */
Vue.filter('transStatus', function (value) {
    if (isEmpty(value)) {
        return '--';
    }

    return commonConfig.STATUS[value];

});



