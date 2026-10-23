# WadifaInfo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WadifaInfoFeatures
  def self.make_feature(name)
    case name
    when "base"
      WadifaInfoBaseFeature.new
    when "ratelimit"
      WadifaInfoRatelimitFeature.new
    when "retry"
      WadifaInfoRetryFeature.new
    when "test"
      WadifaInfoTestFeature.new
    when "timeout"
      WadifaInfoTimeoutFeature.new
    else
      WadifaInfoBaseFeature.new
    end
  end
end
