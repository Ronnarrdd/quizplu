<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = urldecode($_POST['name']);
  $articles = array();
  $file = fopen('articles.csv', 'r');
  while ($line = fgets($file)) {
    $fields = str_getcsv($line, ',', '"', '\\');
    if ($fields[0] != $name) {
      $articles[] = $fields;
    }
  }
  fclose($file);
  $file = fopen('articles.csv', 'w');
  fclose($file);
  echo json_encode('success');
}
