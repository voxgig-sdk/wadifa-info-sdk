<?php
declare(strict_types=1);

// WadifaInfo SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/RatelimitFeature.php';
require_once __DIR__ . '/feature/RetryFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';
require_once __DIR__ . '/feature/TimeoutFeature.php';


class WadifaInfoFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WadifaInfoBaseFeature();
            case "ratelimit":
                return new WadifaInfoRatelimitFeature();
            case "retry":
                return new WadifaInfoRetryFeature();
            case "test":
                return new WadifaInfoTestFeature();
            case "timeout":
                return new WadifaInfoTimeoutFeature();
            default:
                return new WadifaInfoBaseFeature();
        }
    }

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "ratelimit":
            case "retry":
            case "test":
            case "timeout":
                return true;
            default:
                return false;
        }
    }
}
