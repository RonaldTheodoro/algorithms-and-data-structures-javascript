import hot_potato from '../../../../src/algorithms/queue/hot-potato'


describe('Hot potato tests', () => {

    test('Should return expected', () => {
        const elements = ["John", "Jack", "Camila", "Ingrid", "Carl"]
        const num = 7

        const expected_eliminated = ["Camila", "Jack", "Carl", "Ingrid"]
        const expected_winner = "John"

        const result = hot_potato(elements, num)

        expect(result['eliminated']).toEqual(expected_eliminated)
        expect(result['winner']).toEqual(expected_winner)
    })
})