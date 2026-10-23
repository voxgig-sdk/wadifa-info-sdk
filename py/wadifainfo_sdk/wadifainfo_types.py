# Typed models for the WadifaInfo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Concour(TypedDict, total=False):
    deadline: str | None
    employer: str | None
    grade: str
    id: int
    official_notice: str | None
    posts: int | None
    published: str | None
    url: str


class ConcourListMatch(TypedDict, total=False):
    lang: str
    limit: int


class DatesLimite(TypedDict):
    pass


class DatesLimiteLoadMatch(TypedDict, total=False):
    lang: str


class JoursFery(TypedDict, total=False):
    approximate: bool
    date: str
    name_ar: str
    name_fr: str
    religious: bool


class JoursFeryListMatch(TypedDict, total=False):
    approximate: bool
    date: str
    name_ar: str
    name_fr: str
    religious: bool


class SalaryList(TypedDict, total=False):
    grade: str
    net_monthly_mad: int
    url: str


class SalaryListListMatch(TypedDict, total=False):
    lang: str


class VacancesScolaire(TypedDict, total=False):
    end: str
    name_ar: str
    name_fr: str
    start: str


class VacancesScolaireListMatch(TypedDict, total=False):
    end: str
    name_ar: str
    name_fr: str
    start: str
