export default class Queue {

    constructor() {
        this._count = 0
        this._lowestCount = 0
        this._itens = {}
    }

    enqueue(element) {
        this._itens[this._count] = element
        this._count += 1
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }

        const result = this._itens[this._lowestCount]
        delete this._itens[this._lowestCount]
        this._lowestCount++
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }

        return this._itens[this._lowestCount]
    }

    isEmpty() {
        return this._count - this._lowestCount === 0
    }

    clear() {
        this._itens = {}
        this._count = 0
        this._lowestCount = 0
    }

    size() {
        return this._count - this._lowestCount
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }

        let objString = `${this._itens[this._lowestCount]}`
        for (let i = this._lowestCount + 1; i < this._count; i++) {
            objString = `${objString},${this._itens[i]}`
        }

        return objString
    }
}