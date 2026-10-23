// Typed models for the WadifaInfo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Concour {
  deadline?: string | null
  employer?: string | null
  grade?: string
  id?: number
  official_notice?: string | null
  posts?: number | null
  published?: string | null
  url?: string
}

export interface ConcourListMatch {
  lang?: string
  limit?: number
}

export interface DatesLimite {
}

export interface DatesLimiteLoadMatch {
  lang?: string
}

export interface JoursFery {
  approximate?: boolean
  date?: string
  name_ar?: string
  name_fr?: string
  religious?: boolean
}

export interface JoursFeryListMatch {
  approximate?: boolean
  date?: string
  name_ar?: string
  name_fr?: string
  religious?: boolean
}

export interface SalaryList {
  grade?: string
  net_monthly_mad?: number
  url?: string
}

export interface SalaryListListMatch {
  lang?: string
}

export interface VacancesScolaire {
  end?: string
  name_ar?: string
  name_fr?: string
  start?: string
}

export interface VacancesScolaireListMatch {
  end?: string
  name_ar?: string
  name_fr?: string
  start?: string
}

