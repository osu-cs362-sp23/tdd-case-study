module.exports = function rot13(input) {
    if (input === undefined || typeof input !== "string") {
        throw Error("Expected a string parameter")
    }
    let result = ""
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i)
        result += transformChar(charCode)
    }
    return result
}

function transformChar(charCode) {
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
