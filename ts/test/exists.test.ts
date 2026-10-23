
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WadifaInfoSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WadifaInfoSDK.test()
    equal(testsdk instanceof WadifaInfoSDK, true,
      'WadifaInfoSDK.test() must return a client synchronously')
  })

})
