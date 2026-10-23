

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WadifaInfoSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SalaryListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WADIFA_INFO_TEST_LIVE=TRUE.
  afterEach(liveDelay('WADIFA_INFO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WadifaInfoSDK.test()
    const ent = testsdk.SalaryList()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('salary_list hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of WadifaInfoSDK.test(offline).SalaryList().stream('list')) { }
    }, /offline/)

    for await (const _item of WadifaInfoSDK.test(offline).SalaryList()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = WadifaInfoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.SalaryList().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of WadifaInfoSDK.test().SalaryList().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new WadifaInfoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.SalaryList().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.SalaryList().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = WadifaInfoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SalaryList().list({"lang":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WADIFA_INFO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'salary_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"grade":{"a":true,"h":"Grade","n":"grade","r":false,"t":"`$STRING`","key$":"grade","index$":0},"net_monthly_mad":{"a":true,"h":"Net Monthly Mad","n":"net_monthly_mad","r":false,"t":"`$INTEGER`","key$":"net_monthly_mad","index$":1},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":2}},"name":"salary_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v1/salaires","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"fr","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/salaires","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"salaires"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"salary_list","name__orig":"salary_list","Name":"SalaryList","name_":"salary_list","name-":"salary-list","NAME":"SALARY_LIST","index$":3}, {"active":true,"entity":"salary_list","key$":"BasicSalaryListFlow","kind":"basic","name":"BasicSalaryListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"salary_list_ref01"}}],"index$":0}]}, 'SalaryList', {"GET /api/v1/salaires":{"protocol":"http","parameters":[{"name":"lang","in":"query","schema":{"type":"string","enum":["fr","ar"],"default":"fr"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let salary_list_ref01_data = Object.values(setup.data.existing.salary_list)[0] as any

    // LIST
    const salary_list_ref01_ent = client.SalaryList()
    const salary_list_ref01_match: any = {}

    const salary_list_ref01_list = (await salary_list_ref01_ent.list(salary_list_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/salary_list/SalaryListTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WadifaInfoSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['salary_list01','salary_list02','salary_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WADIFA_INFO_TEST_SALARY_LIST_ENTID': idmap,
    'WADIFA_INFO_TEST_LIVE': 'FALSE',
    'WADIFA_INFO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WADIFA_INFO_TEST_SALARY_LIST_ENTID']

  const live = 'TRUE' === env.WADIFA_INFO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WADIFA_INFO_TEST_SALARY_LIST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WadifaInfoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WADIFA_INFO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
