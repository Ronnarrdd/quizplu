<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $code = $_POST['code'];
  $name = str_replace('"', '', $name);
  $code = str_replace('"', '', $code);
  $file = fopen('rticles.csv', 'a');
  fputcsv($file, array($name, $code));
  fclose($file);
}
