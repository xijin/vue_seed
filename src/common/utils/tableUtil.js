import Vue from 'vue';

export default {
    
    getColumnDefs: function (cols) {
        var columnDefs;
        if (Array.isArray(cols)) {
            columnDefs = cols.map(function(item) {
                if (item.dealTemplate === 'canOperate') {
                    item.component = item.name;
                }
                return item;
            });
        }
        return columnDefs;
    }
}