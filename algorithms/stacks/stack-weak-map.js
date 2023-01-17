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
        const s = items.get(this)
        return s[s.length - 1]
    }

    isEmpty() {
        const s = items.get(this)
        return s.length === 0
    }

    clear() {
        while (!this.isEmpty())
            this.pop()
    }
    
    size() {
        const s = items.get(this)
        return s.length
    }

    toString() {
        const s = items.get(this)
        return this.isEmpty() ? '' : s.join(',')
    }
}