const cs = require('..');

const pattern = '()';

test('vowel should replaces vowels', () => {
    expect(cs('butt')).toBe('b*tt');
});

test('vowel should take in a custom character', () => {
    expect(cs('butt', '#')).toBe('b#tt');
});

test('inner should replace all inner character', () => {
    expect(cs.inner('butt')).toBe('b**t');
});

test('inner should take in a custom character', () => {
    expect(cs.inner('butt', '!')).toBe('b!!t');
});

test('inner should\'t replace characters if stringlength <= 2', () => {
    expect(cs.inner('bu')).toBe('bu');
});

test('grawlix should repeat grawlix if first param is a number', () => {
    expect(cs.grawlix(5)).toBe('@#$%!');
});

test('grawlix should replace a word with a grawlix pattern', () => {
    expect(cs.grawlix('butt')).toBe('@#$%');
});

test('grawlix should take in a pattern', () => {
    expect(cs.grawlix('butt', pattern)).toBe('()()');
});
