import Queue from '../../../algorithms/queues/queue'

describe('Queue tests', () => {
    let queue

    beforeEach(() => {
        queue = new Queue()
    })

    test('Should enqueue values', () => {
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue(7)
        queue.enqueue(8)
        queue.enqueue(9)
        expect(queue.isEmpty()).toBeFalsy()
        expect(queue.size()).toEqual(3)
    })

    test('Should dequeue values', () => {
        queue.enqueue(7)
        queue.enqueue(8)
        queue.enqueue(9)
        expect(queue.dequeue()).toEqual(7)
        expect(queue.dequeue()).toEqual(8)
        expect(queue.dequeue()).toEqual(9)
    })

    test('Should dequeue empty value', () => {
        expect(queue.dequeue()).toBeFalsy()
    })

    test('Should peek top value', () => {
        queue.enqueue(42)
        expect(queue.peek()).toEqual(42)
    })

    test('Should peek empty value', () => {
        expect(queue.peek()).toBeFalsy()
    })

    test('Should be empty', () => {
        expect(queue.isEmpty()).toBeTruthy()
        expect(queue.size()).toEqual(0)
    })

    test('Should not be empty', () => {
        queue.enqueue(42)
        expect(queue.isEmpty()).toBeFalsy()
        expect(queue.size()).toEqual(1)
    })

    test('Should be clear', () => {
        queue.enqueue(42)
        queue.enqueue(4)
        queue.enqueue(2)
        expect(queue.size()).toEqual(3)
        queue.clear()
        expect(queue.isEmpty()).toBeTruthy()
    })

    test('Should show string representation', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.toString()).toEqual('1,2,3')
    })

    test('Should show empty string representation', () => {
        expect(queue.toString()).toEqual('')
    })
})