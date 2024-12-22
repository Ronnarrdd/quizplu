<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $code = $_POST['code'];
  $name = str_replace('"', '', $name);
  $code = str_replace('"', '', $code);
  $file = fopen('articles.csv', 'a');
  fwrite($file, $name . ',' . $code . "\n");
  fclose($file);
}
