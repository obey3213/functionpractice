function upperCase(str) {
    return str.split(' ').map(e => e = e[0].toUpperCase() + e.slice(1)).join(' ');
}

console.log(upperCase('the quick brown fox'))


function longestWord(str) {
    return str.split(' ').reduce((a, c) => {
        return c.length > a.length ? c :a;
    }, '')
}

console.log(longestWord('Web Development Tutorial'))

function countVowelsObject(str) {
    const vowels = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'};

    return str.split('').reduce((a, c) => {
        return vowels[c] ? a + 1 : a
    }, 0)
}
console.log(countVowelsObject('The Quick Brown Fox'))
