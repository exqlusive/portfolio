@php
    try {
        $ssr = Http::post('http://localhost:8000/render', $page)->throw()->json();
    } catch (Exception $e) {
        $ssr = null;
    }
@endphp
    <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="theme-color" content="#317EFB"/>
    <link rel="apple-touch-icon" href="/icon-192x192.png">

    <link rel="manifest" href="/manifest.json">

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/566002e451.js" crossorigin="anonymous"></script>

@foreach($ssr['head'] ?? [] as $element)
        {!! $element !!}
    @endforeach
</head>
<body>
@if ($ssr)
    {!! $ssr['body'] !!}
@else
    @inertia
@endif

<script>
    window.trans = <?php
    $lang_files = File::files(resource_path() . '/lang/' . App::getLocale());
    $trans = [];
    foreach ($lang_files as $f) {
        $filename = pathinfo($f)['filename'];
        $trans[$filename] = trans($filename);
    }
    echo json_encode($trans);
    ?>;
</script>
</body>
</html>
