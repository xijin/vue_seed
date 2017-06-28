import Vue from 'vue';

export default {
    
    getColumnDefs: function (cols, isComponent) {
        var columnDefs;
        if (Array.isArray(cols)) {
            columnDefs = cols.map(function(item) {
                if (item.dealTemplate === 'canOperate' && isComponent) {
                    item.cellTemplate = item.name;
                }
                return item;
            });
        }
        return columnDefs;
    }
}