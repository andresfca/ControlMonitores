Ext.Loader.setConfig(
{
	enable: true
}
);

Ext.application({
	name :'CrudExt',
	appFolder:'js/app',
	controllers: ['Usuario'],
	launch: function(){
		Ext.create('Ext.container.Viewport',{
			layout:'fit',
			items:[
				Ext.create('CrudExt.view.usuario.Grid')
			]
		});
	}
});
