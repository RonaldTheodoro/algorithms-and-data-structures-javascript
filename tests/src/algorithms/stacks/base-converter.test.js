import baseConverter from '../../../../src/algorithms/stacks/base-converter'

describe('Base converter tests', () => {

    test('Should convert decimal base', () => {
        expect(baseConverter(100345, 2)).toEqual('11000011111111001')
        expect(baseConverter(100345, 8)).toEqual('303771')
        expect(baseConverter(100345, 16)).toEqual('187F9')
        expect(baseConverter(100345, 35)).toEqual('2BW0')
        expect(baseConverter(100345, 40)).toEqual('')
    })

})