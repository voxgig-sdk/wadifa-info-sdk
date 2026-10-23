<?php
declare(strict_types=1);

// WadifaInfo SDK base feature

class WadifaInfoBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WadifaInfoContext $ctx, array $options): void {}
    public function PostConstruct(WadifaInfoContext $ctx): void {}
    public function PostConstructEntity(WadifaInfoContext $ctx): void {}
    public function SetData(WadifaInfoContext $ctx): void {}
    public function GetData(WadifaInfoContext $ctx): void {}
    public function GetMatch(WadifaInfoContext $ctx): void {}
    public function SetMatch(WadifaInfoContext $ctx): void {}
    public function PrePoint(WadifaInfoContext $ctx): void {}
    public function PreSpec(WadifaInfoContext $ctx): void {}
    public function PreRequest(WadifaInfoContext $ctx): void {}
    public function PreResponse(WadifaInfoContext $ctx): void {}
    public function PreResult(WadifaInfoContext $ctx): void {}
    public function PreDone(WadifaInfoContext $ctx): void {}
    public function PreUnexpected(WadifaInfoContext $ctx): void {}
}
