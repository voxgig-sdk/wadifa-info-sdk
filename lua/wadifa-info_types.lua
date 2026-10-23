-- Typed models for the WadifaInfo SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Concour
---@field deadline? string|nil
---@field employer? string|nil
---@field grade? string
---@field id? number
---@field official_notice? string|nil
---@field posts? number|nil
---@field published? string|nil
---@field url? string

---@class ConcourListMatch
---@field lang? string
---@field limit? number

---@class DatesLimite

---@class DatesLimiteLoadMatch
---@field lang? string

---@class JoursFery
---@field approximate? boolean
---@field date? string
---@field name_ar? string
---@field name_fr? string
---@field religious? boolean

---@class JoursFeryListMatch
---@field approximate? boolean
---@field date? string
---@field name_ar? string
---@field name_fr? string
---@field religious? boolean

---@class SalaryList
---@field grade? string
---@field net_monthly_mad? number
---@field url? string

---@class SalaryListListMatch
---@field lang? string

---@class VacancesScolaire
---@field end? string
---@field name_ar? string
---@field name_fr? string
---@field start? string

---@class VacancesScolaireListMatch
---@field end? string
---@field name_ar? string
---@field name_fr? string
---@field start? string

local M = {}

return M
