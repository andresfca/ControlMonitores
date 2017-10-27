<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class monitoria extends CI_Model{
	
	public function listar(){
		$Monitoria=array();

		$this->db->select('*');
		$this->db->order_by('NOMBRE ASC');
		$this->db->from('registromonitorias');
		$retorno=$this->db->get();
		$Monitores=$retorno->result_array();

		return $Monitores;
	}

	public function actualizar($id,$materia,$monitor,$fecha,$salon){
		$this->db->from('registromonitorias');
		$this->db->where('ID', $id);
		$this->db->update('registromonitorias', array(
			'MATERIA'=>$materia,
			'MONITOR'=>$monitor,
			'FECHA'=>$fecha,
			'SALON'=>$salon));
	}
	public function eliminar($id){
		$this->db->where('ID',$id);
		$this->db->delete('registromonitorias');
	}
	public function guardar($materia, $monitor, $fecha, $salon){
		$retorno=false;
		$this->db->select('count(*) as cantidad');
		$this->db->from('registromonitorias');
		$this->db->where('ID', NULL);
		$result=$this->db->get();
		$cantidad=$result->result_array();
		if($cantidad[0]["cantidad"]==0){
			$this->db->insert('registromonitorias',array(
				'MATERIA'=>$materia,
				'MONITOR'=>$monitor,
				'FECHA'=>$fecha,
				'SALON'=>$salon));
			$retorno = true;
		}
		return $retorno;
	}
}

?>