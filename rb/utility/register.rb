# WadifaInfo SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WadifaInfoUtility.registrar = ->(u) {
  u.clean = WadifaInfoUtilities::Clean
  u.clean_add = WadifaInfoUtilities::CleanAdd
  u.clean_explain = WadifaInfoUtilities::CleanExplain
  u.done = WadifaInfoUtilities::Done
  u.make_error = WadifaInfoUtilities::MakeError
  u.feature_add = WadifaInfoUtilities::FeatureAdd
  u.feature_hook = WadifaInfoUtilities::FeatureHook
  u.feature_init = WadifaInfoUtilities::FeatureInit
  u.fetcher = WadifaInfoUtilities::Fetcher
  u.make_fetch_def = WadifaInfoUtilities::MakeFetchDef
  u.make_context = WadifaInfoUtilities::MakeContext
  u.make_options = WadifaInfoUtilities::MakeOptions
  u.make_request = WadifaInfoUtilities::MakeRequest
  u.make_response = WadifaInfoUtilities::MakeResponse
  u.make_result = WadifaInfoUtilities::MakeResult
  u.make_point = WadifaInfoUtilities::MakePoint
  u.make_spec = WadifaInfoUtilities::MakeSpec
  u.make_url = WadifaInfoUtilities::MakeUrl
  u.param = WadifaInfoUtilities::Param
  u.prepare_auth = WadifaInfoUtilities::PrepareAuth
  u.prepare_body = WadifaInfoUtilities::PrepareBody
  u.prepare_headers = WadifaInfoUtilities::PrepareHeaders
  u.prepare_method = WadifaInfoUtilities::PrepareMethod
  u.prepare_params = WadifaInfoUtilities::PrepareParams
  u.prepare_path = WadifaInfoUtilities::PreparePath
  u.prepare_query = WadifaInfoUtilities::PrepareQuery
  u.graphql_body = WadifaInfoUtilities::GraphqlBody
  u.graphql_errors = WadifaInfoUtilities::GraphqlErrors
  u.result_basic = WadifaInfoUtilities::ResultBasic
  u.result_body = WadifaInfoUtilities::ResultBody
  u.result_headers = WadifaInfoUtilities::ResultHeaders
  u.transform_request = WadifaInfoUtilities::TransformRequest
  u.transform_response = WadifaInfoUtilities::TransformResponse
}
