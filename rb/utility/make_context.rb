# WadifaInfo SDK utility: make_context
require_relative '../core/context'
module WadifaInfoUtilities
  MakeContext = ->(ctxmap, basectx) {
    WadifaInfoContext.new(ctxmap, basectx)
  }
end
