<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class monitor extends CI_Model{
	
	public function listar(){
		$Monitores=array();

		$this->db->select('*');
		$this->db->order_by('NOMBRE ASC');
		$this->db->from('registromonitores');
		$retorno=$this->db->get();
		$Monitores=$retorno->result_array();

		return $Monitores;
	}

	public function actualizar($id,$nombre,$apellido,$programa,$semestre,$cedula,$informacion){
		$this->db->from('registromonitores');
		$this->db->where('ID', $id);
		$this->db->update('registromonitores', array(
			'NOMBRE'=>$nombre,
			'APELLIDO'=>$apellido,
			'PROGRAMA'=>$programa,
			'SEMESTRE'=>$semestre,
			'CEDULA'=>$cedula,
			'INFORMACION'=>$informacion));
	}
	public function eliminar($id){
		$this->db->where('ID',$id);
		$this->db->delete('registromonitores');
	}
	public function guardar($nombre, $apellido, $programa, $semestre, $cedula, $informacion){
		$retorno=false;
		$this->db->select('count(*) as cantidad');
		$this->db->from('registromonitores');
		$this->db->where('ID', NULL);
		$result=$this->db->get();
		$cantidad=$result->result_array();
		if($cantidad[0]["cantidad"]==0){
			$this->db->insert('registromonitores',array(
				'NOMBRE'=>$nombre,
				'APELLIDO'=>$apellido,
				'PROGRAMA'=>$programa,
				'SEMESTRE'=>$semestre,
				'CEDULA'=>$cedula,
				'INFORMACION'=>$informacion));
			$retorno = true;
		}
		return $retorno;
	}
}

?>