Ext.define('CrudExt.view.monitoria.Window', {

	extend: 'Ext.window.Window',
	title: 'Editando registro',
	width: 400,
	height: 240,
	layout: 'fit',
	autoShow: true,
	modal: true,
	alias: 'widget.monitoriaedit',

	initComponent: function(){
		this.items = [
			Ext.widget('monitoriaform')
		];
		this.callParent(arguments);
	}

});