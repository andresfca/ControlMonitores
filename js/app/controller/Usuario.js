Ext.define('CrudExt.controller.Usuario',{
	extend: 'Ext.app.Controller',

	views: ['usuario.Grid', 'usuario.Form', 'usuario.Window'],
	models: ['Usuario'],
	stores: ['Usuarios'],

	refs: [
        {
            ref: 'list',
            selector: 'usuariogrid'
        }
    ],

    init: function(){
    	this.control({
    		'usuariogrid button[action=edit]':{
    			click: this.edit
    		},'usuariogrid':{
    			selectionchange: this.selected
    		},
    		'usuariogrid': {
                itemdblclick: this.edit
            },
    		'usuariogrid button[action=add]': {
                click: this.add
    		},
    		'usuariogrid button[action=delete]':{
    			click: this.destroy
    		},
    		'usuarioform button[action=save]': {
                click: this.save
            }
    		});	
	},
	add: function(){
		var me = this,
			view = Ext.widget('usuarioedit');

		view.setTitle('Adicionando monitor');
	},

	edit: function(btn){
		var me = this,
			grid = me.getList(),
			records = grid.getSelectionModel().getSelection();
		if(records.length === 1){
			var record = records[0],
				view = Ext.widget('usuarioedit'),
				form = view.down('usuarioform').getForm();

			form.loadRecord(record);
			view.setTitle('Editando monitor');

		}else{
			Ext.Msg.alert('Error', 'Seleccione por lo menos uno');
		}
	},
	selected: function(grid,selected){
		var me = this,
		notOne = selected.length !==1;
		console.log(notOne);
		grid.down("button[action=edit]").setDisabled(notOne);
	},
	save: function(btn){
		var me = this,
			form = btn.up('usuarioform'),
			win = form.up('window'),
			basicForm = form.getForm(),
			grid = me.getList(),
			store = grid.getStore(),
			record = basicForm.getRecord(),
			values = basicForm.getValues();


		if(basicForm.isValid()){
			if(!record){
				record = Ext.create('CrudExt.model.Usuario');
				record.set(values);
				store.add(record);
			}else{
				record.set(values);
			}

			store.sync();
			win.close();

		}else{
			Ext.Msg.alert('Error', 'Llenar los campos faltates');
		}
	},

	destroy: function(){
		var me = this,
		grid = me.getList(),
		store = grid.getStore(),
		records = grid.getSelectionModel().getSelection();
		if(records.length === 0){
			Ext.Msg.alert('Error', 'Seleccione por lo menos uno');
		}else{
			Ext.Msg.show({
				title:'Confirmacion',
				msg:'¿Desea eliminar este usuario?',
				buttons:Ext.Msg.YESNO,
				icon:Ext.MessageBox.WARNING,
				scope:this,
				width: 450,
				fn: function(btn,ev){
					if(btn == 'yes'){
						for (var i =0; i<records.length; i++) {
							store.remove(records[i]);
							store.sync();
						}
					}
				}
				});
		}
	}
});
    
