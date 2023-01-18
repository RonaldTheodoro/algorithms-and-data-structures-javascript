import Stack from '../../../algorithms/stacks/stack'

export default function baseConverter(decimalNumber, base) {
    const stack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decimalNumber
    let rem
    let baseString = ''
    if(!(base >= 2 && base <= 36)) {
        return ''
    }
    while (number > 0) {
        rem = Math.floor(number % base)
        stack.push(rem)
        number = Math.floor(number / base)
    }

    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()]
    }

    return baseString
}
