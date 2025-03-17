<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $newCode = $_POST['new_code'];
  $articles = array();
  $file = fopen('articles.csv', 'r');
  while ($line = fgetcsv($file)) {
    if ($line[0] == $name) {
      $line[1] = $newCode;
    }
    $articles[] = $line;
  }
  fclose($file);
  $file = fopen('articles.csv', 'w');
  foreach ($articles as $line) {
    fputcsv($file, $line);
  }
  fclose($file);
}
