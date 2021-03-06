Ext.define('CrudExt.store.Monitores',{
	extend:'Ext.data.Store',
	autoLoad:true,
	autoSync:false,
	storeId:'Monitores',
	pageSize:20,
	mode:'CrudExt.model.Monitores',
	proxy:{
		type:'ajax',
		api:{
			create:'http://localhost/index.php/agregar',
			read:'http://localhost/index.php/listar',
			update:'http://localhost/index.php/actualizar',
			destroy:'http://localhost/index.php/borrar'
		},
		actionMethods:{
			create:'POST',
			read:'POST',
			update:'POST',
			destroy:'POST'
		},
		reader:{
			type:'json',
			root:'data',
			rootProperty:'data',
			successProperty:'success',
			messageProperty:'message'
		},
		writer:{
			type:'json',
			writeAllFields:true,
			root:'data',
			encode:true
		}
	}
});