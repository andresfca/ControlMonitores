<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class monitoria extends CI_Controller {
	public function index(){
		//$this->load->view('index');
	}
	public function listar(){
		$this->load->model('monitoria');
		$monitorias=$this->monitoria->listar();
		echo json_encode(array('data'=>$monitorias));
	}
	public function agregar(){
		$data = json_decode($_POST['data']);
		$this->load->model('monitoria');
		$this->monitoria->guardar($data->MATERIA,$data->MONITOR,$data->FECHA,$data->SALON);
	}
	public function actualizar(){
		$data = json_decode($_POST['data']);
		$this->load->model('monitoria');
		$this->monitoria->actualizar($data->ID,$data->MATERIA,$data->MONITOR,$data->FECHA,$data->SALON);
	}
	public function borrar(){
		$data = json_decode($_POST['data']);
		$this->load->model("monitoria");
		if (is_array($data)) {
			for ($i=0; $i <count($data) ; $i++){
				$this->monitoria->eliminar($data[$i]->ID);
			}
		}else{
			$this->monitoria->eliminar($data->ID);
		}
	}
}


?>