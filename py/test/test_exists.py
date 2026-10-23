# WadifaInfo SDK exists test

import pytest
from wadifainfo_sdk import WadifaInfoSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WadifaInfoSDK.test(None, None)
        assert testsdk is not None
