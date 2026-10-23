<?php
declare(strict_types=1);

// WadifaInfo SDK utility: feature_hook

class WadifaInfoFeatureHook
{
    public static function call(WadifaInfoContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
