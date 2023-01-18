import decimalToBinary from '../../../../src/algorithms/stacks/decimal-to-binary'

describe('Decimal to binary tests', () => {

    test('Should convert decimal to binary', () => {
        expect(decimalToBinary(233)).toEqual('11101001')
        expect(decimalToBinary(10)).toEqual('1010')
        expect(decimalToBinary(1000)).toEqual('1111101000')
    })

})