

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


describe('DatesLimiteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WADIFA_INFO_TEST_LIVE=TRUE.
  afterEach(liveDelay('WADIFA_INFO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WadifaInfoSDK.test()
    const ent = testsdk.DatesLimite()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = WadifaInfoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DatesLimite().load({"lang":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WADIFA_INFO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dates_limite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"dates_limite","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /agenda/dates-limites","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/agenda/dates-limites","q":{},"r":{},"rs":{"binary":true,"kind":"raw","media":"text/calendar"},"s":[{"lit":"agenda"},{"lit":"dates-limites"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dates_limite","name__orig":"dates_limite","Name":"DatesLimite","name_":"dates_limite","name-":"dates-limite","NAME":"DATES_LIMITE","index$":1}, {"active":true,"entity":"dates_limite","key$":"BasicDatesLimiteFlow","kind":"basic","name":"BasicDatesLimiteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dates_limite_ref01","srcdatavar":"dates_limite_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dates_limite_ref01"}}],"index$":0}]}, 'DatesLimite', {"GET /agenda/dates-limites":{"protocol":"http","parameters":[{"name":"lang","in":"query","schema":{"type":"string","enum":["fr","ar"]},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dates_limite_ref01_data = Object.values(setup.data.existing.dates_limite)[0] as any

    // LOAD
    const dates_limite_ref01_ent = client.DatesLimite()
    const dates_limite_ref01_match_dt0: any = {}
    const dates_limite_ref01_data_dt0 = (await dates_limite_ref01_ent.load(dates_limite_ref01_match_dt0)).data()
    assert(null != dates_limite_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/dates_limite/DatesLimiteTestData.json')

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
    ['dates_limite01','dates_limite02','dates_limite03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WADIFA_INFO_TEST_DATES_LIMITE_ENTID': idmap,
    'WADIFA_INFO_TEST_LIVE': 'FALSE',
    'WADIFA_INFO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WADIFA_INFO_TEST_DATES_LIMITE_ENTID']

  const live = 'TRUE' === env.WADIFA_INFO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WADIFA_INFO_TEST_DATES_LIMITE_ENTID']
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
  
