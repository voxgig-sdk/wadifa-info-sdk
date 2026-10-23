package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewConcourEntityFunc func(client *WadifaInfoSDK, entopts map[string]any) WadifaInfoEntity

var NewDatesLimiteEntityFunc func(client *WadifaInfoSDK, entopts map[string]any) WadifaInfoEntity

var NewJoursFeryEntityFunc func(client *WadifaInfoSDK, entopts map[string]any) WadifaInfoEntity

var NewSalaryListEntityFunc func(client *WadifaInfoSDK, entopts map[string]any) WadifaInfoEntity

var NewVacancesScolaireEntityFunc func(client *WadifaInfoSDK, entopts map[string]any) WadifaInfoEntity

