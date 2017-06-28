import Vue from 'vue';

export default {
    
    getColumnDefs: function (cols, tplPrefix) {
        var columnDefs;
        if (Array.isArray(cols)) {
            columnDefs = cols.map(function(item) {
                if (item.dealTemplate === 'canOperate' && tplPrefix) {
                    item.cellTemplate = tplPrefix + item.name + '.html';
                }
                return item;
            });
        }
        return columnDefs;
    }
}