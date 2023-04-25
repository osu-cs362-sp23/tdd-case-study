const rot13 = require("./rot13")

test("returns empty string for empty input", function () {
    expect(rot13("")).toBe("")
})

test("transforms one lowercase letter w/o looping", function () {
    expect(rot13("a")).toBe("n")
})

test("transforms one lowercase letter with looping", function () {
    expect(rot13("n")).toBe("a")
})

test("transforms one uppercase letter w/o looping", function () {
    expect(rot13("A")).toBe("N")
})

test("transforms one uppercase letter with looping", function () {
    expect(rot13("N")).toBe("A")
})

test("doesn't transform first character before 'a' ('`')", function () {
    expect(rot13("`")).toBe("`")
})

test("doesn't transform first character after 'z' ('{')", function () {
    expect(rot13("{")).toBe("{")
})

test("doesn't transform first character before 'A' ('@')", function () {
    expect(rot13("@")).toBe("@")
})

test("doesn't transform first character after 'Z' ('[')", function () {
    expect(rot13("[")).toBe("[")
})
