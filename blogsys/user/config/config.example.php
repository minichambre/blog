<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['is_system_on'] = 'y';
$config['multiple_sites_enabled'] = 'n';
$config['show_ee_news'] = 'n';
$config['cp_url'] = "http://localhost:8080/blogsys.php";
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '5.3.0';
$config['encryption_key'] = '4e632c799f1ac37d326259df349d868ceec8ac24';
$config['session_crypt_key'] = 'fc927582a8a7d9eebdb8ade26778f0953f087395';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => '127.0.0.1',
		'database' => 'blog',
		'username' => 'root',
		'password' => 'password',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);

// EOF