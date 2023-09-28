import { transformUrl } from '_utils'

const siteNames = ['g81', 'ukpn']

describe('transformUrl utility function', () => {
  it('should transform "/" correctly', () => {
    expect(transformUrl('/')).toEqual('/')
  })

  it.each(siteNames)('should transform root url correctly', (siteName) => {
    expect(transformUrl(`/${siteName}/`)).toEqual(`/`)
    expect(transformUrl(`/${siteName}`)).toEqual(`/`)
    expect(transformUrl(`${siteName}/`)).toEqual(`/`)
    expect(transformUrl(`${siteName}`)).toEqual(`/`)
  })

  it.each(siteNames)('should transform non-root url correctly', (siteName) => {
    expect(transformUrl(`/${siteName}/test-1/`)).toEqual(`/test-1`)
    expect(transformUrl(`${siteName}/test-1/`)).toEqual(`/test-1`)
    expect(transformUrl(`/${siteName}/test-1`)).toEqual(`/test-1`)
    expect(transformUrl(`${siteName}/test-1`)).toEqual(`/test-1`)
    expect(transformUrl(`test-1`)).toEqual(`/test-1`)
    expect(transformUrl(`test-1/`)).toEqual(`/test-1`)
    expect(transformUrl(`/test-1`)).toEqual(`/test-1`)
    expect(transformUrl(`/test-1/`)).toEqual(`/test-1`)
  })

  it.each(siteNames)(
    'should transform non-root deep url correctly',
    (siteName) => {
      expect(transformUrl(`/${siteName}/test-1/test-2/`)).toEqual(
        `/test-1/test-2`
      )
      expect(transformUrl(`${siteName}/test-1/test-2/`)).toEqual(
        `/test-1/test-2`
      )
      expect(transformUrl(`/${siteName}/test-1/test-2`)).toEqual(
        `/test-1/test-2`
      )
      expect(transformUrl(`${siteName}/test-1/test-2`)).toEqual(
        `/test-1/test-2`
      )
    }
  )

  it.each(siteNames)(
    'should transform different start path url correctly',
    (siteName) => {
      expect(transformUrl(`/test/${siteName}/test-1/test-2/`)).toEqual(
        `/test/${siteName}/test-1/test-2`
      )
      expect(transformUrl(`test/${siteName}/test-1/test-2/`)).toEqual(
        `/test/${siteName}/test-1/test-2`
      )
      expect(transformUrl(`/test/${siteName}/test-1/test-2`)).toEqual(
        `/test/${siteName}/test-1/test-2`
      )
      expect(transformUrl(`test/${siteName}/test-1/test-2`)).toEqual(
        `/test/${siteName}/test-1/test-2`
      )
    }
  )
})
