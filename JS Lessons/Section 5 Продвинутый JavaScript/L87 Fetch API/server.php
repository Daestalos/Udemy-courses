<?php
// для того, чтобы php мог работать с json (получить на php json данные)
$_POST = json_decode(file_get_contents("php://input"), true);
?>