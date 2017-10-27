Ext.define('CrudExt.view.usuario.Grid',{
	extend: 'Ext.grid.Panel',
	title		: 'Lista de usuarios',
	itemId		: 'usuarioGrid',
	xtype		: 'usuariogrid',
	store 		: 'Usuarios',
    selType: 'checkboxmodel',
	initComponent: function(){

		this.columns = [
			{ header: 'ID',  dataIndex: 'ID' },
			{
        text: 'NOMBRE',
        sortable: true,
        dataIndex: 'NOMBRE',
        groupable: false,
        width: 150,
        renderer: function(v, cellValues, rec) {
            return rec.get('NOMBRE');
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
                            property     : 'NOMBRE',
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
	        { header: 'APELLIDO', dataIndex: 'APELLIDO'},
	        { header: 'PROGRAMA', dataIndex: 'PROGRAMA'},
	        { header: 'SEMESTRE', dataIndex: 'SEMESTRE'},
	        { header: 'CEDULA', dataIndex: 'CEDULA'},
	        { header: 'INFORMACION', dataIndex: 'INFORMACION'}
		];

		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'button',
						text: 'Adicionar usuario',
						action: 'add'
					},
					{
						text: 'Eliminar usuario',
						action: 'delete'
					},
					{
						text: 'Editar usuario',
						action: 'edit'
					}
				]
			},
			{
		        xtype: 'pagingtoolbar',
		        store: 'Usuarios',
		        dock: 'bottom',
		        displayInfo: true
		    }
		];

		this.callParent(arguments);
	}

});
