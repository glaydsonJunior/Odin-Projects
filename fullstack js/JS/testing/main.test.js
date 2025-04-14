const uses = require("./usables.js")


test('Capitalize test', () => {
    expect(uses.capitalize('time')).toBe('Time')
})


test('Reverse test', () => {
    expect(uses.reverseString('round')).toBe('dnuor')
})

test('Calculator test', () => {
    expect(uses.calculator.add(2025, 5)).toBe(2030)
    expect(uses.calculator.subtract(2025, 5)).toBe(2020)
    expect(uses.calculator.multiply(2025, 5)).toBe(10125)
    expect(uses.calculator.divide(2025, 5)).toBe(405)
})



test('Ceaser Cipher test', () => {
    expect(uses.caesarCipher('xyz', 3)).toBe('abc')
    expect(uses.caesarCipher('HeLLo', 3)).toBe('KhOOr')
    expect(uses.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test("Analyze array teste", () =>  {
    expect(uses.analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})