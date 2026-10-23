// Typed models for the WadifaInfo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/wadifa-info-sdk/go/core"
)

// Concour is the typed data model for the concour entity.
type Concour struct {
}

// ConcourListMatch is the typed request payload for Concour.ListTyped.
type ConcourListMatch struct {
	Lang *string `json:"lang,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// DatesLimite is the typed data model for the dates_limite entity.
type DatesLimite struct {
}

// DatesLimiteLoadMatch is the typed request payload for DatesLimite.LoadTyped.
type DatesLimiteLoadMatch struct {
	Lang *string `json:"lang,omitempty"`
}

// JoursFery is the typed data model for the jours_fery entity.
type JoursFery struct {
}

// JoursFeryListMatch is the typed request payload for JoursFery.ListTyped.
type JoursFeryListMatch struct {
	Approximate *bool `json:"approximate,omitempty"`
	Date *string `json:"date,omitempty"`
	NameAr *string `json:"name_ar,omitempty"`
	NameFr *string `json:"name_fr,omitempty"`
	Religious *bool `json:"religious,omitempty"`
}

// SalaryList is the typed data model for the salary_list entity.
type SalaryList struct {
}

// SalaryListListMatch is the typed request payload for SalaryList.ListTyped.
type SalaryListListMatch struct {
	Lang *string `json:"lang,omitempty"`
}

// VacancesScolaire is the typed data model for the vacances_scolaire entity.
type VacancesScolaire struct {
}

// VacancesScolaireListMatch is the typed request payload for VacancesScolaire.ListTyped.
type VacancesScolaireListMatch struct {
	End *string `json:"end,omitempty"`
	NameAr *string `json:"name_ar,omitempty"`
	NameFr *string `json:"name_fr,omitempty"`
	Start *string `json:"start,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
