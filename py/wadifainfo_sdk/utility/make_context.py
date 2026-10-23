# WadifaInfo SDK utility: make_context

from wadifainfo_sdk.core.context import WadifaInfoContext


def make_context_util(ctxmap, basectx):
    return WadifaInfoContext(ctxmap, basectx)
