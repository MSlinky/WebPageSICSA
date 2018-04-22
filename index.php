<?php

$page = $_GET['page'];

if( isset($page) && $page == 'Inicio' ){
	include ('./page/index.php');
}else if( isset($page) && $page == 'Productos' ){
	include ('./page/productos.php');
}else if( isset($page) && $page == 'Producto' ){
	include ('./page/producto.php');
}else{
	include ('./page/index.php');
}

?>

