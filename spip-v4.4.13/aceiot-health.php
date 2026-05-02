<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$response = [
    'ok' => true,
    'cms' => 'SPIP',
    'version' => '4.4.13',
    'timestamp' => gmdate('c'),
    'spipRootDetected' => file_exists(__DIR__ . '/spip.php'),
    'message' => 'ACEIoT SPIP bridge is reachable.',
];

echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);