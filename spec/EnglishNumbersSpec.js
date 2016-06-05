describe("English numbers", function() {
  it("is zero when 0", function() {
    expect(numberInEnglish(0)).toEqual("zero")
  })

  it("is one when 1", function() {
    expect(numberInEnglish(1)).toEqual("one")
  })
})
