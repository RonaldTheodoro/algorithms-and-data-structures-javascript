import Stack from '../../../algorithms/stacks/stack'

describe('Stack tests', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    test('Should push values', () => {
        expect(stack.isEmpty()).toBe(true)
        stack.push(7)
        stack.push(8)
        stack.push(9)
        expect(stack.isEmpty()).toBeFalsy()
        expect(stack.size()).toEqual(3)
    })

    test('Should pop values', () => {
        stack.push(7)
        stack.push(8)
        stack.push(9)
        expect(stack.pop()).toEqual(9)
        expect(stack.pop()).toEqual(8)
        expect(stack.pop()).toEqual(7)
    })

    test('Should pop empty value', () => {
        expect(stack.pop()).toBeFalsy()
    })

    test('Should peek top value', () => {
        stack.push(42)
        expect(stack.peek()).toEqual(42)
    })

    test('Should peek empty value', () => {
        expect(stack.peek()).toBeFalsy()
    })

    test('Should be empty', () => {
        expect(stack.isEmpty()).toBeTruthy()
        expect(stack.size()).toEqual(0)
    })

    test('Should not be empty', () => {
        stack.push(42)
        expect(stack.isEmpty()).toBeFalsy()
        expect(stack.size()).toEqual(1)
    })

    test('Should be clear', () => {
        stack.push(42)
        stack.push(4)
        stack.push(2)
        expect(stack.size()).toEqual(3)
        stack.clear()
        expect(stack.isEmpty()).toBeTruthy()
    })

    test('Should show string representation', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.toString()).toEqual('1,2,3')
    })

    test('Should show empty string representation', () => {
        expect(stack.toString()).toEqual('')
    })
})