<?php
declare(strict_types=1);

// WadifaInfo SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WadifaInfoMakeContext
{
    public static function call(array $ctxmap, ?WadifaInfoContext $basectx): WadifaInfoContext
    {
        return new WadifaInfoContext($ctxmap, $basectx);
    }
}
