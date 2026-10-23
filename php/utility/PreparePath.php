<?php
declare(strict_types=1);

// WadifaInfo SDK utility: prepare_path

class WadifaInfoPreparePath
{
    public static function call(WadifaInfoContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
