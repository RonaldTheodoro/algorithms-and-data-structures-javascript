export default class Deque {
    constructor() {
        this._count = 0
        this._lowestCount = 0
        this._itens = {}
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this._lowestCount > 0) {
            this._lowestCount--
            this._itens[this._lowestCount] = element
        } else {
            for (let i = this._count; i > 0; i--) {
                this._itens[i] = this._itens[i - 1]
            }
            this._count++
            this._lowestCount = 0
            this._itens[0] = element
        }
    }

    addBack(element) {
        this._itens[this._count] = element
        this._count++
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }

        const result = this._itens[this._lowestCount]
        delete this._itens[this._lowestCount]
        this._lowestCount++
        return result
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }

        this._count--
        const item = this._itens[this._count]
        delete this._itens[this._count]
        return item
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }

        return this._itens[this._lowestCount]
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }

        return this._itens[this._count - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this._count = 0
        this._lowestCount = 0
        this._itens = {}
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