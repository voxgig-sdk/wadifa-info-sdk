-- WadifaInfo SDK exists test

local sdk = require("wadifa-info_sdk")

describe("WadifaInfoSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
