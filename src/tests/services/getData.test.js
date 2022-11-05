import getData from '../../services/getData'

const URL = 'https://mercadolibre.com.ar'

describe('Testing Fetchs API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    test('Call API and return Data', async () => {
        fetch.mockResponseOnce(JSON.stringify({ data : '12345'}))
        await getData(URL)
        .then(response => {
            expect(response.data).toEqual('12345')
        })
        expect(fetch.mock.calls[0][0]).toEqual('https://mercadolibre.com.ar')
    })
})