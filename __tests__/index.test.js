var cs = require('../index')
var pattern = '()'

test('vowel should replaces vowels', function() {
    expect(cs('butt')).toBe('b*tt')
})

test('vowel should take in a custom character', function() {
    expect(cs('butt', '#')).toBe('b#tt')
})

test('inner should replace all inner character', function() {
    expect(cs.inner('butt')).toBe('b**t')
})

test('inner should take in a custom character', function() {
    expect(cs.inner('butt', '!')).toBe('b!!t')
})

test('inner should\'t replace characters if stringlength <= 2', function() {
    expect(cs.inner('bu')).toBe('bu')
})

test('grawlix should repeat grawlix if first param is a number', function() {
    expect(cs.grawlix(5)).toBe('@#$%!')
})

test('grawlix should replace a word with a grawlix pattern', function() {
    expect(cs.grawlix('butt')).toBe('@#$%')
})

test('grawlix should take in a pattern', function() {
    expect(cs.grawlix('butt', pattern)).toBe('()()')
})