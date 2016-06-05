describe("English numbers", function() {
  it("is zero when 0", function() {
    expect(numberInEnglish(0)).toEqual("zero")
  })

  it("is one when 1", function() {
    expect(numberInEnglish(1)).toEqual("one")
  })

  it("is nine when 9", function() {
    expect(numberInEnglish(9)).toEqual("nine")
  })

  it("is minus three when -3", function() {
    expect(numberInEnglish(-3)).toEqual("minus three")
  })

  it("is minus seven when -7", function() {
    expect(numberInEnglish(-7)).toEqual("minus seven")
  })

  it("is ten when 10", function() {
    expect(numberInEnglish(10)).toEqual("ten")
  })

  it("is seventeen when 17", function() {
    expect(numberInEnglish(17)).toEqual("seventeen")
  })
})
