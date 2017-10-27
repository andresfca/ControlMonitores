<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class monitor extends CI_Controller {
	public function index(){
		$this->load->view('index');
	}
	public function listar(){
		$this->load->model('monitor');
		$monitores=$this->monitor->listar();
		echo json_encode(array('data'=>$monitores));
	}
	public function agregar(){
		$data = json_decode($_POST['data']);
		$this->load->model('monitor');
		$this->monitor->guardar($data->NOMBRE,$data->APELLIDO,$data->PROGRAMA,$data->SEMESTRE,$data->CEDULA,$data->INFORMACION);
	}
	public function actualizar(){
		$data = json_decode($_POST['data']);
		$this->load->model('monitor');
		$this->monitor->actualizar($data->ID,$data->NOMBRE,$data->APELLIDO,$data->PROGRAMA,$data->CEDULA,$data->INFORMACION);
	}
	public function borrar(){
		$data = json_decode($_POST['data']);
		$this->load->model("monitor");
		if (is_array($data)) {
			for ($i=0; $i <count($data) ; $i++){
				$this->monitor->eliminar($data[$i]->ID);
			}
		}else{
			$this->monitor->eliminar($data->ID);
		}
	}
}


?>