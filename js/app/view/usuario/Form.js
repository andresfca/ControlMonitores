Ext.define('CrudExt.view.usuario.Form', {
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
	alias: 'widget.usuarioform',

	padding: 7,
	style: 'background-color: white;',
	border: false,

	initComponent:function(){
		this.items=[{
			name:'NOMBRE',
			fieldLabel:'NOMBRE'
		},
		{
			name:'APELLIDO',
			fieldLabel:'APELLIDO'
		},
		{
			name:'PROGRAMA',
			fieldLabel:'PROGRAMA'
		},
		{
			name:'SEMESTRE',
			fieldLabel:'SEMESTRE'
		},
		{
			name:'CEDULA',
			fieldLabel:'CEDULA'
		},
		{
			name:'INFORMACION',
			fieldLabel:'INFORMACION'
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