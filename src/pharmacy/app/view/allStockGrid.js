Ext.define('RaxaEmr.Pharmacy.view.allStockGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allStockGrid',
    height: 250,
    width: 600,
    layout: {
        type: 'absolute'
    },
    x: 110,
    store: Ext.create('RaxaEmr.Pharmacy.store.StockList'),
    selModel : Ext.create('Ext.selection.RowModel', {
        listeners : {
            select : function(rowModel, record, rowIndex) {
                console.log(record.data.drugName);
                //on select, go to drug details page
                Ext.getCmp('mainarea').getLayout().setActiveItem(PHARM_PAGES.DRUGDETAILS.value);
                Ext.getCmp('drugDetails').initForDrug(record.data.drugName);
            },
            scope : this
        }  
    }),    
    columns: [

    {
        xtype: 'rownumberer',
        text: 'S.No',
        width: 40
    },{
        xtype: 'gridcolumn',
        text: 'Status',
        dataIndex: 'status',
        width: 60
    },
    {
        xtype: 'gridcolumn',
        text: 'Name',
        dataIndex: 'drugName',
        width: 120,
        listeners: {
            focus: function(){
                console.log('hi');
            },
            el: {
                dblclick: function() {
                    console.log('hi');
                }
            } 
        }
    },
    {
        xtype: 'gridcolumn',
        text: 'Type',
        width: 80
    },
    {
        xtype: 'gridcolumn',
        text: 'Qty',
        dataIndex: 'quantity',
        width: 80
    },
    {
        xtype: 'gridcolumn',
        text: 'Days',
        width: 60,
        dataIndex: 'days',
        useNull: true
    },
    {
        xtype: 'gridcolumn',
        text: 'Location',
        dataIndex: 'roomLocation',
        width: 100
    }]
});
