<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$news = [
    [
        'slug' => 'graduate-research-call',
        'title' => 'Graduate research call opens for the next intake',
        'summary' => 'Applicants can now submit proposals in intelligent systems, networks, and digital services.',
        'category' => 'Research',
        'date' => 'April 18, 2026',
    ],
    [
        'slug' => 'industry-series-launch',
        'title' => 'Industry Connect series starts this term',
        'summary' => 'A new programme links postgraduate study with public-sector and industry practice.',
        'category' => 'Partnership',
        'date' => 'April 2, 2026',
    ],
    [
        'slug' => 'research-symposium-2026',
        'title' => 'Research symposium to showcase student work',
        'summary' => 'The annual symposium will feature short presentations, demos, and partner sessions.',
        'category' => 'Events',
        'date' => 'March 21, 2026',
    ],
];

$response = [
    'ok' => true,
    'source' => 'spip',
    'count' => count($news),
    'items' => $news,
];

echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
