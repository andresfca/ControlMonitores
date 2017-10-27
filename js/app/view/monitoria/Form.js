Ext.define('CrudExt.view.monitoria.Form', {
	extend: 'Ext.form.Panel',
	requires: [
		'Ext.form.Field'
			  ],
	defaultType: 'textfield',
	defaults: {
		allowBlank: false,
		labelAlign: 'left',
		labelWidth: 150,
	},
	alias: 'widget.monitoriaform',

	padding: 7,
	style: 'background-color: white;',
	border: false,

	initComponent:function(){
		this.items=[{
			name:'MATERIA',
			fieldLabel:'MATERIA'
		},
		{
			name:'MONITOR',
			fieldLabel:'MONITOR'
		},
		{
			name:'FECHA',
			fieldLabel:'FECHA'
		},
		{
			name:'SALON',
			fieldLabel:'SALON'
		}
	];

	this.bbar = [{
		text:'Salvar',
		action:'save',
		itemId:'salvar'
	},
	{
		text:'Cancelar',
		action:'cancel',
		itemId:'cancelar',
		handler:function(){
			this.up('window').close();
		}
	}
];
this.callParent(arguments);
}

});