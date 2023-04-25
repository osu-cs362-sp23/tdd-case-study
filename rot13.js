module.exports = function rot13(input) {
    if (input === "") {
        return ""
    }
    const charCode = input.charCodeAt(0)
    if (isBetween(charCode, "a", "m") || isBetween(charCode, "A", "M")) {
        return String.fromCharCode(charCode + 13)
    } else if (isBetween(charCode, "n", "z") || isBetween(charCode, "N", "Z")) {
        return String.fromCharCode(charCode - 13)
    } else {
        return String.fromCharCode(charCode)
    }
}

function isBetween(charCode, firstLetter, lastLetter) {
    return charCode >= codeFor(firstLetter)
        && charCode <= codeFor(lastLetter)
}

function codeFor(letter) {
    return letter.charCodeAt(0)
}
