const Stack = require('../../../algorithms/stacks/stack')

function decimalToBinary(decimalNumber) {
    const stack = new Stack()

    let number = decimalNumber
    let rem
    let binaryString = ''

    while (number > 0) {
        rem = Math.floor(number % 2)
        stack.push(rem)
        number = Math.floor(number / 2)
    }

    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString()
    }

    return binaryString
}

module.exports = decimalToBinary
