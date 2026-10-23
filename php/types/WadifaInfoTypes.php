<?php
declare(strict_types=1);

// Typed models for the WadifaInfo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Concour entity data model. */
class Concour
{
    public mixed $deadline = null;
    public mixed $employer = null;
    public ?string $grade = null;
    public ?int $id = null;
    public mixed $official_notice = null;
    public mixed $posts = null;
    public mixed $published = null;
    public ?string $url = null;
}

/** Request payload for Concour#list. */
class ConcourListMatch
{
    public ?string $lang = null;
    public ?int $limit = null;
}

/** DatesLimite entity data model. */
class DatesLimite
{
}

/** Request payload for DatesLimite#load. */
class DatesLimiteLoadMatch
{
    public ?string $lang = null;
}

/** JoursFery entity data model. */
class JoursFery
{
    public ?bool $approximate = null;
    public ?string $date = null;
    public ?string $name_ar = null;
    public ?string $name_fr = null;
    public ?bool $religious = null;
}

/** Request payload for JoursFery#list. */
class JoursFeryListMatch
{
    public ?bool $approximate = null;
    public ?string $date = null;
    public ?string $name_ar = null;
    public ?string $name_fr = null;
    public ?bool $religious = null;
}

/** SalaryList entity data model. */
class SalaryList
{
    public ?string $grade = null;
    public ?int $net_monthly_mad = null;
    public ?string $url = null;
}

/** Request payload for SalaryList#list. */
class SalaryListListMatch
{
    public ?string $lang = null;
}

/** VacancesScolaire entity data model. */
class VacancesScolaire
{
    public ?string $end = null;
    public ?string $name_ar = null;
    public ?string $name_fr = null;
    public ?string $start = null;
}

/** Request payload for VacancesScolaire#list. */
class VacancesScolaireListMatch
{
    public ?string $end = null;
    public ?string $name_ar = null;
    public ?string $name_fr = null;
    public ?string $start = null;
}

