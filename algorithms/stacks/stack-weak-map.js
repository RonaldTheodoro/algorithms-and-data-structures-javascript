const items = new WeakMap()

export default class StackWeakMap {

    constructor() {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    pop() {
        const s = items.get(this)
        return s.pop()
    }

    peek() {
        return this._items[this._items.length - 1]
    }

    isEmpty() {
        return this._items.length === 0
    }

    clear() {
        this._items = []
    }

    size() {
        return this._items.length
    }
}