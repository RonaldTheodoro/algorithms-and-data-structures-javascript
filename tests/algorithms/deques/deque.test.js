import Deque from '../../../algorithms/deque/deque'


describe('Deque tests', () => {
    let deque

    beforeEach(() => {
        deque = new Deque()
    })

    test('Should add front', () => {
        expect(deque.isEmpty()).toBeTruthy()
        deque.addFront(1)
        deque.addFront(2)
        deque.addFront(3)
        expect(deque.isEmpty()).toBeFalsy()
        expect(deque.size()).toEqual(3)
    })

    test('Should add back', () => {
        expect(deque.isEmpty()).toBeTruthy()
        deque.addBack(1)
        deque.addBack(2)
        deque.addBack(3)
        expect(deque.isEmpty()).toBeFalsy()
        expect(deque.size()).toEqual(3)
    })

    test('Should remove front', () => {
        deque.addFront(1)
        deque.addFront(2)
        deque.addFront(3)
        expect(deque.removeFront()).toEqual(3)
        expect(deque.removeFront()).toEqual(2)
        expect(deque.removeFront()).toEqual(1)
    })

    test('Should remove back', () => {
        deque.addBack(1)
        deque.addBack(2)
        deque.addBack(3)
        expect(deque.removeBack()).toEqual(3)
        expect(deque.removeBack()).toEqual(2)
        expect(deque.removeBack()).toEqual(1)
    })

    test('Should be undefined remove front if deque is empty', () => {
        expect(deque.removeFront()).toBeUndefined()
    })

    test('Should be undefined remove back if deque is empty', () => {
        expect(deque.removeBack()).toBeUndefined()
    })

    test('Should return first element when peek front', () => {
        deque.addFront(1)
        deque.addFront(2)
        deque.addFront(3)
        deque.addFront(42)
        expect(deque.peekFront()).toEqual(42)
    })

    test('Should return last element when peek back', () => {
        deque.addBack(1)
        deque.addBack(2)
        deque.addBack(3)
        deque.addBack(42)
        expect(deque.peekBack()).toEqual(42)
    })

    test('Should return undefined when peek front in empty deque', () => {
        expect(deque.peekFront()).toBeUndefined()
    })

    test('Should return undefined when peek back in empty deque', () => {
        expect(deque.peekBack()).toBeUndefined()
    })

    test('Should size be 0 when deque is empty', () => {
        expect(deque.isEmpty()).toBeTruthy()
        expect(deque.size()).toEqual(0)
    })

    test('Should not size be 0 when deque is empty', () => {
        deque.addFront(42)
        expect(deque.isEmpty()).toBeFalsy()
        expect(deque.size()).toEqual(1)
    })

    test('Should be empty after clear deque', () => {
        deque.addFront(1)
        deque.addBack(2)
        deque.addFront(3)
        deque.addBack(4)
        expect(deque.size()).toEqual(4)
        deque.clear()
        expect(deque.isEmpty()).toBeTruthy()
    })

    test('Should show string representation', () => {
        deque.addFront(1)
        deque.addFront(2)
        deque.addFront(3)
        expect(deque.toString()).toEqual('3,2,1')
    })

    test('Should show empty string representation', () => {
        expect(deque.toString()).toEqual('')
    })
})