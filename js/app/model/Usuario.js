Ext.define('CrudExt.model.Usuario',{
	extend:'Ext.data.Model',
	fields:['ID','NOMBRE','APELLIDO','PROGRAMA','SEMESTRE','CEDULA','INFORMACION'],
	idProperty:'ID'
});