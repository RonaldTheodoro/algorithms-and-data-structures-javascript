import Queue from '../../../algorithms/queues/queue'


export default function hot_potato(elements, num) {
    const queue = new Queue()
    const eliminated = []

    elements.forEach(e => queue.enqueue(e));

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated.push(queue.dequeue())
    }
    return {"eliminated": eliminated, "winner": queue.dequeue()}
}