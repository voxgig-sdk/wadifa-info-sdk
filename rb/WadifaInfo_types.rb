# frozen_string_literal: true

# Typed models for the WadifaInfo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Concour entity data model.
#
# @!attribute [rw] deadline
#   @return [Object, nil]
#
# @!attribute [rw] employer
#   @return [Object, nil]
#
# @!attribute [rw] grade
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] official_notice
#   @return [Object, nil]
#
# @!attribute [rw] posts
#   @return [Object, nil]
#
# @!attribute [rw] published
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Concour = Struct.new(
  :deadline,
  :employer,
  :grade,
  :id,
  :official_notice,
  :posts,
  :published,
  :url,
  keyword_init: true
)

# Request payload for Concour#list.
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
ConcourListMatch = Struct.new(
  :lang,
  :limit,
  keyword_init: true
)

# DatesLimite entity data model.
class DatesLimite
end

# Request payload for DatesLimite#load.
#
# @!attribute [rw] lang
#   @return [String, nil]
DatesLimiteLoadMatch = Struct.new(
  :lang,
  keyword_init: true
)

# JoursFery entity data model.
#
# @!attribute [rw] approximate
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] name_ar
#   @return [String, nil]
#
# @!attribute [rw] name_fr
#   @return [String, nil]
#
# @!attribute [rw] religious
#   @return [Boolean, nil]
JoursFery = Struct.new(
  :approximate,
  :date,
  :name_ar,
  :name_fr,
  :religious,
  keyword_init: true
)

# Request payload for JoursFery#list.
#
# @!attribute [rw] approximate
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] name_ar
#   @return [String, nil]
#
# @!attribute [rw] name_fr
#   @return [String, nil]
#
# @!attribute [rw] religious
#   @return [Boolean, nil]
JoursFeryListMatch = Struct.new(
  :approximate,
  :date,
  :name_ar,
  :name_fr,
  :religious,
  keyword_init: true
)

# SalaryList entity data model.
#
# @!attribute [rw] grade
#   @return [String, nil]
#
# @!attribute [rw] net_monthly_mad
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SalaryList = Struct.new(
  :grade,
  :net_monthly_mad,
  :url,
  keyword_init: true
)

# Request payload for SalaryList#list.
#
# @!attribute [rw] lang
#   @return [String, nil]
SalaryListListMatch = Struct.new(
  :lang,
  keyword_init: true
)

# VacancesScolaire entity data model.
#
# @!attribute [rw] end
#   @return [String, nil]
#
# @!attribute [rw] name_ar
#   @return [String, nil]
#
# @!attribute [rw] name_fr
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [String, nil]
VacancesScolaire = Struct.new(
  :end,
  :name_ar,
  :name_fr,
  :start,
  keyword_init: true
)

# Request payload for VacancesScolaire#list.
#
# @!attribute [rw] end
#   @return [String, nil]
#
# @!attribute [rw] name_ar
#   @return [String, nil]
#
# @!attribute [rw] name_fr
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [String, nil]
VacancesScolaireListMatch = Struct.new(
  :end,
  :name_ar,
  :name_fr,
  :start,
  keyword_init: true
)

