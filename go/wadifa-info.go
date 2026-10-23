package voxgigwadifainfosdk

import (
	"github.com/voxgig-sdk/wadifa-info-sdk/go/core"
	"github.com/voxgig-sdk/wadifa-info-sdk/go/entity"
	"github.com/voxgig-sdk/wadifa-info-sdk/go/feature"
	_ "github.com/voxgig-sdk/wadifa-info-sdk/go/utility"
)

// Type aliases preserve external API.
type WadifaInfoSDK = core.WadifaInfoSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WadifaInfoEntity = core.WadifaInfoEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WadifaInfoError = core.WadifaInfoError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewConcourEntityFunc = func(client *core.WadifaInfoSDK, entopts map[string]any) core.WadifaInfoEntity {
		return entity.NewConcourEntity(client, entopts)
	}
	core.NewDatesLimiteEntityFunc = func(client *core.WadifaInfoSDK, entopts map[string]any) core.WadifaInfoEntity {
		return entity.NewDatesLimiteEntity(client, entopts)
	}
	core.NewJoursFeryEntityFunc = func(client *core.WadifaInfoSDK, entopts map[string]any) core.WadifaInfoEntity {
		return entity.NewJoursFeryEntity(client, entopts)
	}
	core.NewSalaryListEntityFunc = func(client *core.WadifaInfoSDK, entopts map[string]any) core.WadifaInfoEntity {
		return entity.NewSalaryListEntity(client, entopts)
	}
	core.NewVacancesScolaireEntityFunc = func(client *core.WadifaInfoSDK, entopts map[string]any) core.WadifaInfoEntity {
		return entity.NewVacancesScolaireEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWadifaInfoSDK = core.NewWadifaInfoSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWadifaInfoSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WadifaInfoSDK  { return NewWadifaInfoSDK(nil) }
func Test() *WadifaInfoSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
