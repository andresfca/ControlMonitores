Ext.define('CrudExt.view.monitoria.Grid',{
	extend: 'Ext.grid.Panel',
	title		: 'Lista de monitorias',
	itemId		: 'monitoriaGrid',
	xtype		: 'monitoriagrid',
	store 		: 'Monitorias',
    selType: 'checkboxmodel',
	initComponent: function(){

		this.columns = [
			{ header: 'ID',  dataIndex: 'ID' },
			{
        text: 'MATERIA',
        sortable: true,
        dataIndex: 'MATERIA',
        groupable: false,
        width: 150,
        renderer: function(v, cellValues, rec) {
            return rec.get('MATERIA');
        },
        editor: {
            xtype: 'textfield'
        },
        items    : {
            xtype: 'textfield',
            flex : 1,
            margin: 2,
            enableKeyEvents: true,
            listeners: {
                keyup: function() {
                    var store = this.up('tablepanel').store;
                    store.clearFilter();
                    if (this.value) {
                        store.filter({
                            property     : 'MATERIA',
                            value         : this.value,
                            anyMatch      : true,
                            caseSensitive : false
                        });
                    }
                },
                buffer: 500
            }
        }
    },
	        { header: 'MONITOR', dataIndex: 'MONITOR'},
	        { header: 'FECHA', dataIndex: 'FECHA'},
	        { header: 'SALON', dataIndex: 'SALON'}
		];

		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'button',
						text: 'Adicionar monitoria',
						action: 'add'
					},
					{
						text: 'Eliminar monitoria',
						action: 'delete'
					},
					{
						text: 'Editar monitoria',
						action: 'edit'
					},
					{
                   		xtype: 'extensible.calendarpanel',
                    	eventStore: eventStore
                    }
				]
			},
			{
		        xtype: 'pagingtoolbar',
		        store: 'Monitorias',
		        dock: 'bottom',
		        displayInfo: true
		    }
		];

		this.callParent(arguments);
	}

});