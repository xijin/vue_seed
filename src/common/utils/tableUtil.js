import Vue from 'vue';

export default {
    
    getColumnDefs: function (cols, prefix) {
        var columnDefs;
        if (Array.isArray(cols)) {
            columnDefs = cols.map(function(item) {
                if (item.dealTemplate === 'canOperate') {
                    item.component = prefix +'-' +item.name;
                }
                return item;
            });
        }
        return columnDefs;
    }
}