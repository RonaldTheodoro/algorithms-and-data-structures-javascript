import palindromeChecker from '../../../../src/algorithms/deque/palindrome-checker'


describe('Palindrome checker tests', () => {

    test('Should return expected', () => {
        expect(palindromeChecker('a')).toBeTruthy()
        expect(palindromeChecker('aa')).toBeTruthy()
        expect(palindromeChecker('kayak')).toBeTruthy()
        expect(palindromeChecker('level')).toBeTruthy()
        expect(palindromeChecker('Was it a car or a cat I saw')).toBeTruthy()
        expect(palindromeChecker('Step on no pets')).toBeTruthy()
    })

    test('Should return false', () => {
        expect(palindromeChecker(undefined)).toBeFalsy()
        expect(palindromeChecker(null)).toBeFalsy()
        expect(palindromeChecker('')).toBeFalsy()
        expect(palindromeChecker('ximira')).toBeFalsy()
    })
})