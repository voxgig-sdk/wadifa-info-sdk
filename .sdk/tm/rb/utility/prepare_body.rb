# WadifaInfo SDK utility: prepare_body
require_relative 'media'
module WadifaInfoUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WadifaInfoUtilities.raw_body(ctx.reqdata) if WadifaInfoUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
