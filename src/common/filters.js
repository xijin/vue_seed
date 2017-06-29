'use strict';
import Vue from 'vue';

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